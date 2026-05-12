import React from 'react';

// A regex to identify Kanji characters.
const kanjiRegex = /[\u4e00-\u9faf\u3400-\u4dbf]/;

interface JapaneseTextProps {
  text: string;
  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => void;
}

const JapaneseText: React.FC<JapaneseTextProps> = ({ text, onKanjiClick }) => {
  const renderWithKanjiClick = (str: string) => {
    // Use split with a capturing group to avoid breaking grapheme clusters in non-Kanji text (like Burmese)
    const parts = str.split(/([\u4e00-\u9faf\u3400-\u4dbf])/g);
    
    return parts.map((part, index) => {
      // The regex test ensures we only wrap single characters that are Kanji.
      if (kanjiRegex.test(part) && part.length === 1) {
        return (
          <span
            key={`${part}-${index}`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent the parent button from being clicked
              onKanjiClick(part, e);
            }}
            className="cursor-pointer hover:text-indigo-600 transition-colors"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const rubyRegex = /<ruby>(.*?)<rt>(.*?)<\/rt><\/ruby>/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  // Manually reset lastIndex as it's stateful on the global regex object
  rubyRegex.lastIndex = 0;

  while ((match = rubyRegex.exec(text)) !== null) {
    // Push the text before the match
    if (match.index > lastIndex) {
      parts.push(renderWithKanjiClick(text.substring(lastIndex, match.index)));
    }
    // Push the ruby element
    const [_, base, rt] = match;
    parts.push(
      <ruby key={lastIndex}>
        {renderWithKanjiClick(base)}
        <rt>{rt}</rt>
      </ruby>
    );
    lastIndex = rubyRegex.lastIndex;
  }

  // Push the remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(renderWithKanjiClick(text.substring(lastIndex)));
  }

  return <>{parts.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)}</>;
};

export default JapaneseText;
