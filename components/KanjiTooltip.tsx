import React from 'react';
import { Kanji } from '../types';

interface KanjiTooltipProps {
  kanjiData: Kanji | null;
  position: { top: number; left: number };
  onClose: () => void;
}

const KanjiTooltip: React.FC<KanjiTooltipProps> = ({ kanjiData, position, onClose }) => {
  if (!kanjiData) return null;

  return (
    <>
      {/* Overlay to catch clicks outside the tooltip */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
      
      <div
        className="absolute z-50 w-64 p-4 bg-white rounded-lg shadow-2xl ring-1 ring-slate-900/10 transition-opacity duration-200 dark:bg-slate-800 dark:ring-white/20"
        style={{ 
          top: position.top, 
          left: position.left, 
          transform: 'translateY(10px)',
          // Prevent it from going off-screen horizontally
          maxWidth: 'calc(100vw - 32px)',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing it
      >
        <div className="flex items-start justify-between pb-3 border-b border-gray-200 dark:border-slate-700">
          <p className="text-5xl font-semibold leading-none text-indigo-600 dark:text-indigo-400">{kanjiData.character}</p>
          <div className='text-right'>
             <p className="text-lg font-semibold text-gray-800 dark:text-slate-100">{kanjiData.meaning}</p>
             <p className="mt-1 text-lg font-semibold text-indigo-700 dark:text-indigo-300">{kanjiData.meaningMY}</p>
          </div>
        </div>
        
        <div className="mt-3 text-sm text-gray-600 dark:text-slate-300">
          <p><strong className="font-semibold text-gray-900 w-20 inline-block dark:text-slate-100">On'yomi:</strong> {kanjiData.onyomi}</p>
          <p className="mt-1"><strong className="font-semibold text-gray-900 w-20 inline-block dark:text-slate-100">Kun'yomi:</strong> {kanjiData.kunyomi}</p>
        </div>
        <button 
            onClick={onClose} 
            className="absolute top-2 right-2 p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
            aria-label="Close"
        >
             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </button>
      </div>
    </>
  );
};

export default KanjiTooltip;