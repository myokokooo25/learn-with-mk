import React, { useState, useRef, useEffect } from 'react';
import { StudyCardData, VocabItem } from '../types';
import { ChevronDownIcon, BookmarkIcon, BookmarkSolidIcon, SpeakerIcon, LoadingSpinnerIcon, SparkleIcon, BookOpenIcon, PencilIcon, AcademicCapIcon, CheckCircleSolidIcon, XCircleSolidIcon } from './Icons';
import { useBookmarks } from '../hooks/useBookmarks';
import { useLanguage } from '../contexts/LanguageContext';
import JapaneseText from './JapaneseText';
import { GoogleGenAI, Modality } from "@google/genai";
import { vocabularyData } from '../data/vocab';

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
  const vocabData = vocabularyData[data.id] || [];


  useEffect(() => {
    setAiExplanation(null);
    setIsAiLoading(false);
    setAiError(null);
    setActiveTab('explanation');
  }, [data.id]);

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
                onClick={() => setActiveTab('vocab')}
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
              
              {activeTab === 'vocab' && (
                  <div>
                  {vocabData && vocabData.length > 0 ? (
                      <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-slate-600">
                          <thead className="text-xs text-slate-500 uppercase">
                          <tr>
                              <th scope="col" className="px-4 py-2">Japanese</th>
                              <th scope="col" className="px-4 py-2">Burmese</th>
                              <th scope="col" className="px-4 py-2">Type</th>
                          </tr>
                          </thead>
                          <tbody>
                          {vocabData.map((item, index) => (
                              <tr key={index} className="border-t border-neumorphic-shadow-dark/20">
                              <td className="px-4 py-2 font-mono"><JapaneseText text={item.jp} onKanjiClick={onKanjiClick} /></td>
                              <td className="px-4 py-2">{item.my}</td>
                              <td className="px-4 py-2 text-slate-500">{item.type}</td>
                              </tr>
                          ))}
                          </tbody>
                      </table>
                      </div>
                  ) : (
                      <p className="text-center text-slate-500 py-4">ဤမေးခွန်းအတွက် ဝေါဟာရ မရှိပါ။</p>
                  )}
                  </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;