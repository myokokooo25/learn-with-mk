import React, { useState, useRef, useEffect } from 'react';
import { StudyCardData, VocabItem } from '../types';
import { ChevronDownIcon, ChevronLeftIcon, BookmarkIcon, BookmarkSolidIcon, SpeakerIcon, LoadingSpinnerIcon, SparkleIcon, BookOpenIcon, PencilIcon, AcademicCapIcon, CheckCircleSolidIcon, XCircleSolidIcon } from './Icons';
import { useBookmarks } from '../hooks/useBookmarks';
import { useLanguage } from '../contexts/LanguageContext';
import JapaneseText from './JapaneseText';
import { GoogleGenAI, Modality } from "@google/genai";
import { vocabularyData } from '../data/vocab';

const EMPTY_VOCAB_LIST: VocabItem[] = [];

// Helper function to prepare text for TTS by removing furigana annotations.
const stripHtml = (html: string): string => {
  // This regex finds ruby tags and replaces the entire tag with only the base text.
  // e.g., for <ruby>漢字<rt>かんじ</rt></ruby>, it becomes "漢字".
  const textWithoutFurigana = html.replace(/<ruby>(.*?)<rt>.*?<\/rt><\/ruby>/g, '$1');
  
  // Strip any other remaining HTML tags that might exist.
  const doc = new DOMParser().parseFromString(textWithoutFurigana, 'text/html');
  return doc.body.textContent || "";
};


// Helper functions for audio decoding
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}


interface CardProps {
  data: StudyCardData;
  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => void;
  mode: 'study'; // Mode is now fixed to 'study'
  onOptionSelect?: (optionId: number) => void;
  selectedOptionId?: number;
  isSubmitted?: boolean;
}

const Card: React.FC<CardProps> = ({ 
    data, 
    onKanjiClick,
    mode,
    onOptionSelect,
    selectedOptionId,
    isSubmitted = false,
}) => {
  const { language } = useLanguage();
  const { bookmarkedIds, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarkedIds.has(data.id);
  
  const [audioLoadingId, setAudioLoadingId] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentSourceRef = useRef<AudioBufferSourceNode | null>(null);
  
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [showWaitMessage, setShowWaitMessage] = useState(false);

  const [activeTab, setActiveTab] = useState<'explanation' | 'vocab'>('explanation');
  const [vocabFlashIdx, setVocabFlashIdx] = useState(0);
  const [vocabFlip, setVocabFlip] = useState(false);
  const vocabData = vocabularyData[data.id] ?? EMPTY_VOCAB_LIST;

  useEffect(() => {
    setAiExplanation(null);
    setIsAiLoading(false);
    setAiError(null);
  }, [data.id]);

  useEffect(() => {
    setVocabFlashIdx(0);
    setVocabFlip(false);
  }, [data.id]);

  useEffect(() => {
    setActiveTab(language === 'jp-only' ? 'vocab' : 'explanation');
  }, [language, data.id]);

  useEffect(() => {
    if (vocabData.length === 0) return;
    setVocabFlashIdx((prev) => Math.min(prev, vocabData.length - 1));
  }, [data.id, vocabData.length]);

  useEffect(() => {
    let timer: number;
    if (isAiLoading) {
      timer = window.setTimeout(() => {
        setShowWaitMessage(true);
      }, 5000); // 5 seconds
    } else {
      setShowWaitMessage(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isAiLoading]);

  const handleExplainAgain = async () => {
    setIsAiLoading(true);
    setAiError(null);
    setAiExplanation(null);

    const correctOption = data.options.find(opt => opt.id === data.correctOptionId);
    if (!correctOption) {
      setAiError("Correct option details could not be found.");
      setIsAiLoading(false);
      return;
    }

    const prompt = `
      You are a helpful AI assistant for Japanese structural engineering. A user didn't understand the original explanation for a quiz question.
      Your task is to explain the concept again in a simpler way in Burmese.

      **Instructions:**
      1.  **Start your entire response with this exact Burmese phrase, without any changes or additions before it:** "မင်္ဂလာပါ ဒီမေးခွန်းနဲ့ ပတ်သက်ပြီး နားမလည်တာကို ကျွန်တော်က ပိုရှင်းလင်းအောင် ထပ်ရှင်းပြပေးပါမယ်နော်။"
      2.  After the initial phrase, provide a clear explanation focusing on *why the correct answer is right* and *why the other options are wrong*.
      3.  The entire response must be in Burmese.
      4.  Use simple Markdown for formatting (e.g., bolding with **text**, lists with -).

      **Question Details:**
      **Question (JP):** ${stripHtml(data.questionJP)}
      **Question (MY):** ${data.questionMY}

      **Options:**
      ${data.options.map(opt => `- (${opt.id}) ${stripHtml(opt.textJP)} / ${opt.textMY}`).join('\n')}

      **Correct Answer:** (${data.correctOptionId}) ${stripHtml(correctOption.textJP)} / ${correctOption.textMY}

      **Original Explanation:** ${stripHtml(data.explanation.reasonMY)}

      **Your New, Simpler Explanation in Burmese:**
    `;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      
      let formattedText = response.text;
      // Basic markdown replacement
      formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
      formattedText = formattedText.replace(/\n/g, '<br />'); // Newlines
      
      setAiExplanation(formattedText);

    } catch (err) {
      console.error("Error fetching AI explanation:", err);
      setAiError("Sorry, an error occurred while generating the explanation. Please try again.");
    } finally {
      setIsAiLoading(false);
    }
  };


  const handlePlayAudio = async (textToSpeak: string, uniqueId: string) => {
    if (audioLoadingId) return; // Prevent multiple requests

    if (currentSourceRef.current) {
      currentSourceRef.current.stop();
      currentSourceRef.current = null;
    }

    setAudioLoadingId(uniqueId);

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }
      const audioContext = audioContextRef.current;
      
      const cleanText = stripHtml(textToSpeak);
      if (!cleanText.trim()) {
          console.error("Text to speak is empty after cleaning.");
          setAudioLoadingId(null);
          return;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say clearly in standard Japanese: ${cleanText}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64Audio) {
        throw new Error("No audio data received from API.");
      }

      const audioBytes = decode(base64Audio);
      const audioBuffer = await decodeAudioData(audioBytes, audioContext, 24000, 1);
      
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();

      currentSourceRef.current = source;
      source.onended = () => {
        setAudioLoadingId(null);
        currentSourceRef.current = null;
      };

    } catch (error) {
      console.error("Error playing audio:", error);
      setAudioLoadingId(null);
    }
  };
  
  const AudioButton = ({ text, id }: { text: string, id: string }) => (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); handlePlayAudio(text, id); }}
      disabled={!!audioLoadingId}
      className="mk-touch-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-500 shadow-neumorphic-outset transition-all active:shadow-neumorphic-inset disabled:cursor-not-allowed disabled:opacity-50"
      aria-label="Play audio"
    >
      {audioLoadingId === id ? (
        <LoadingSpinnerIcon className="w-4 h-4" />
      ) : (
        <SpeakerIcon className="w-4 h-4" />
      )}
    </button>
  );

  const renderVocabularyFlashcards = () => {
    if (vocabData.length === 0) {
      return <p className="py-6 text-center text-slate-500">ဤမေးခွန်းအတွက် ဝေါဟာရ မရှိပါ။</p>;
    }

    const item = vocabData[vocabFlashIdx];
    const vocabAudioId = `${data.id}-vocab-${vocabFlashIdx}`;

    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setVocabFlip((f) => !f)}
          className="mk-touch-btn flex min-h-[12rem] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-white/75 via-white/45 to-slate-100/45 px-5 py-6 text-center shadow-mk-float ring-1 ring-white/65 transition active:scale-[0.993]"
          aria-live="polite"
        >
          {!vocabFlip ? (
            <>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">日本語</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <p className="font-mono text-xl font-semibold leading-relaxed text-slate-800 sm:text-2xl">
                  <JapaneseText text={item.jp} onKanjiClick={onKanjiClick} />
                </p>
                <AudioButton text={item.jp} id={vocabAudioId} />
              </div>
            </>
          ) : (
            <>
              <span className="rounded-full bg-slate-200/80 px-3 py-1 text-xs font-medium text-slate-600">{item.type}</span>
              <p className="max-w-xl text-xl font-semibold leading-snug text-slate-800 sm:text-2xl">{item.my}</p>
              <p className="font-mono text-sm leading-relaxed text-slate-500">
                <JapaneseText text={item.jp} onKanjiClick={onKanjiClick} />
              </p>
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-500">ကဒ်ကို တို့၍ မျက်နှာပြန်ပြောင်းပြီး ဂျပန်ပြည်မနဲ့ မြန်မာကို လေ့လာပါ</p>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setVocabFlip(false);
              setVocabFlashIdx((i) => Math.max(0, i - 1));
            }}
            disabled={vocabFlashIdx === 0}
            className="mk-touch-btn flex h-12 min-w-[3rem] flex-1 items-center justify-center rounded-2xl bg-neumorphic-bg text-sm font-semibold text-slate-700 shadow-neumorphic-outset transition disabled:opacity-35"
          >
            <ChevronLeftIcon className="mr-1 h-5 w-5" /> Prev
          </button>
          <span className="shrink-0 text-sm font-bold tabular-nums text-slate-700">
            {vocabFlashIdx + 1} / {vocabData.length}
          </span>
          <button
            type="button"
            onClick={() => {
              setVocabFlip(false);
              setVocabFlashIdx((i) => Math.min(vocabData.length - 1, i + 1));
            }}
            disabled={vocabFlashIdx >= vocabData.length - 1}
            className="mk-touch-btn flex h-12 min-w-[3rem] flex-1 items-center justify-center rounded-2xl bg-neumorphic-bg text-sm font-semibold text-slate-700 shadow-neumorphic-outset transition disabled:opacity-35"
          >
            Next{' '}
            <span className="-scale-x-100 inline-flex">
              <ChevronLeftIcon className="ml-1 h-5 w-5" />
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-3xl bg-neumorphic-bg shadow-mk-float ring-1 ring-white/50">
      <div className="p-5 sm:p-6 md:p-7">
        <div className='flex items-start justify-between mb-6'>
            <div className="flex-1 pr-4">
                <p className="mb-1 text-sm font-semibold text-slate-500">Question {data.id}</p>
                 {language === 'my' ? (
                  <>
                    <p className="text-lg font-semibold leading-relaxed text-slate-700">{data.questionMY}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="font-mono text-base text-slate-500">
                        <JapaneseText text={data.questionJP} onKanjiClick={onKanjiClick} />
                      </p>
                      <AudioButton text={data.questionJP} id={`${data.id}-question`} />
                    </div>
                  </>
                ) : ( // Covers 'jp' and 'jp-only'
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-mono text-lg text-slate-700">
                        <JapaneseText text={data.questionJP} onKanjiClick={onKanjiClick} />
                      </p>
                      <AudioButton text={data.questionJP} id={`${data.id}-question`} />
                    </div>
                     {language === 'jp' && (
                        <p className="text-base font-semibold leading-relaxed text-slate-500">{data.questionMY}</p>
                    )}
                  </>
                )}
            </div>
             <button
                type="button"
                onClick={() => toggleBookmark(data.id)}
                className={`mk-touch-btn -mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                  isBookmarked ? 'bg-white/50 text-slate-800 shadow-neumorphic-inset ring-1 ring-white/40' : 'text-slate-500 shadow-neumorphic-outset ring-1 ring-white/30 active:shadow-neumorphic-inset'
                }`}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              <BookmarkIcon className="w-6 h-6" />
            </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {data.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = isSubmitted && option.id === data.correctOptionId;
            const isIncorrect = isSelected && isSubmitted && !isCorrect;

            let shadowClass = 'shadow-neumorphic-outset';
            if (isSelected) {
              shadowClass = 'shadow-neumorphic-inset';
            }
            
            const textColorClass = isCorrect ? 'text-green-600' : isIncorrect ? 'text-red-600' : 'text-neumorphic-text';
            const cursorClass = isSubmitted ? 'cursor-default' : 'cursor-pointer';

            return (
              <div
                role="button"
                tabIndex={isSubmitted ? -1 : 0}
                onKeyDown={(e) => {
                  if (isSubmitted) return;
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOptionSelect?.(option.id);
                  }
                }}
                key={option.id}
                onClick={!isSubmitted ? () => onOptionSelect && onOptionSelect(option.id) : undefined}
                className={`mk-touch-btn flex min-h-[3.25rem] w-full items-start justify-between rounded-2xl border border-transparent px-4 py-4 text-left transition-all duration-200 active:scale-[0.996] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 ${shadowClass} ${cursorClass} ${textColorClass} ${isSubmitted ? '' : 'hover:ring-1 hover:ring-indigo-200/60'} ${isCorrect ? 'ring-1 ring-emerald-300/70' : ''} ${isIncorrect ? 'ring-1 ring-red-300/70' : ''}`}
              >
                  <div className="flex-1 pr-4">
                     {language === 'my' ? (
                        <>
                            <p className="font-medium">{option.textMY}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <p className="font-mono text-sm text-slate-500">
                                    <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                                </p>
                                <AudioButton text={option.textJP} id={`${data.id}-option-${option.id}`} />
                            </div>
                        </>
                    ) : ( // Covers 'jp' and 'jp-only'
                        <>
                            <div className="flex items-center gap-2">
                                <p className="font-mono font-medium">
                                    <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                                </p>
                                <AudioButton text={option.textJP} id={`${data.id}-option-${option.id}`} />
                            </div>
                             {language === 'jp' && (
                                <p className="mt-1 text-sm text-slate-500">{option.textMY}</p>
                            )}
                        </>
                    )}
                  </div>
                  {isSubmitted && (
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        {isCorrect && <CheckCircleSolidIcon className="w-6 h-6 text-green-500"/>}
                        {isIncorrect && <XCircleSolidIcon className="w-6 h-6 text-red-500"/>}
                    </div>
                  )}
              </div>
            )
          })}
        </div>

        {language === 'jp-only' && (
          <div className="mt-6 rounded-2xl bg-neumorphic-bg/90 p-4 pt-6 shadow-neumorphic-inset ring-1 ring-white/40 sm:p-5">
            <div className="mb-4 flex items-center gap-2 text-slate-800">
              <AcademicCapIcon className="h-6 w-6 shrink-0 text-indigo-600" />
              <span className="text-lg font-bold">ဝေါဟာရ ဖလပ်ကဒ်</span>
            </div>
            {renderVocabularyFlashcards()}
          </div>
        )}

        {language !== 'jp-only' && (
          <div className="pt-6 mt-6">
            <div className="mb-4 flex p-1.5 shadow-neumorphic-inset rounded-xl bg-neumorphic-bg/80 ring-1 ring-white/35">
              <button
                type="button"
                onClick={() => setActiveTab('explanation')}
                className={`mk-touch-btn flex min-h-[48px] flex-1 items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${activeTab === 'explanation' ? 'bg-white/70 text-slate-800 shadow-mk-float' : 'text-slate-500'}`}
              >
                <PencilIcon className="w-5 h-5 mr-2" /> ရှင်းလင်းချက်
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('vocab');
                  setVocabFlip(false);
                }}
                className={`mk-touch-btn flex min-h-[48px] flex-1 items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${activeTab === 'vocab' ? 'bg-white/70 text-slate-800 shadow-mk-float' : 'text-slate-500'}`}
              >
                <AcademicCapIcon className="w-5 h-5 mr-2" /> ဝေါဟာရ
              </button>
            </div>

            <div className="rounded-2xl bg-neumorphic-bg/90 p-4 shadow-neumorphic-inset ring-1 ring-white/40 sm:p-5">
              {activeTab === 'explanation' && (
                <>
                  {isSubmitted ? (
                    <div>
                      <h3 className="text-lg font-semibold text-slate-700">
                        <JapaneseText text={data.explanation.titleMY} onKanjiClick={onKanjiClick} />
                      </h3>
                      <div className="mt-4 space-y-4 text-sm text-slate-600">
                        <p><strong className="font-semibold text-red-600">အကြောင်းရင်း:</strong> <JapaneseText text={data.explanation.reasonMY} onKanjiClick={onKanjiClick} /></p>
                        <p><strong className="font-semibold text-blue-600">မှတ်သားရန်:</strong> <JapaneseText text={data.explanation.memoryTipMY} onKanjiClick={onKanjiClick} /></p>
                      </div>
                      <div className="mt-6">
                        <button
                            type="button"
                            onClick={handleExplainAgain}
                            disabled={isAiLoading}
                            className="mk-touch-btn mt-6 flex min-h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3.5 text-sm font-semibold text-white shadow-mk-float transition hover:brightness-105 active:scale-[0.99] disabled:cursor-wait disabled:opacity-75 disabled:hover:brightness-100"
                        >
                            {isAiLoading ? <LoadingSpinnerIcon className="w-5 h-5 mr-2" /> : <SparkleIcon className="w-5 h-5 mr-2" />}
                            {isAiLoading ? 'စဉ်းစားနေသည်...' : '✨ ရှင်းလင်းချက်အသစ်တောင်းမည်'}
                        </button>
                      </div>

                      {isAiLoading && showWaitMessage && (
                        <p className="mt-4 text-sm text-center text-slate-500">
                          စောင့်ရတာ အရမ်းကြာသွားရင် တောင်းပန်ပါတယ်...
                        </p>
                      )}
                      
                      {aiError && <div className="mt-4 p-4 text-center text-red-600 bg-red-100 rounded-lg">{aiError}</div>}
                      {aiExplanation && (
                          <div className="mt-4 p-4 rounded-lg bg-neumorphic-bg shadow-neumorphic-inset">
                              <h4 className="font-semibold text-slate-600 flex items-center"><SparkleIcon className="w-5 h-5 mr-2" /> AI မှ ရှင်းလင်းချက်</h4>
                              <div className="mt-2 space-y-2 text-sm text-slate-500" dangerouslySetInnerHTML={{ __html: aiExplanation }}></div>
                          </div>
                      )}
                    </div>
                  ) : (
                      <div className="text-center py-4">
                          <p className="text-slate-500">ရှင်းလင်းချက်ကို ကြည့်ရှုရန် အဖြေတစ်ခုကို ရွေးချယ်ပေးပါ။</p>
                      </div>
                  )}
                </>
              )}
              
              {activeTab === 'vocab' && renderVocabularyFlashcards()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;