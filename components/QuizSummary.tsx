import React from 'react';
import { PencilIcon } from './Icons';

interface QuizSummaryProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onExit: () => void;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ score, totalQuestions, onRetry, onExit }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="text-center py-16 px-6 bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-white/10">
        <PencilIcon className="w-12 h-12 mx-auto text-indigo-500 dark:text-indigo-400" />
        <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-slate-100">Quiz Complete!</h3>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">You've finished the quiz.</p>
        
        <div className="my-8">
            <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">
                {score} / {totalQuestions}
            </p>
            <p className="mt-2 text-xl font-semibold text-gray-800 dark:text-slate-200">
                {percentage}%
            </p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
            <button 
                onClick={onRetry}
                className="px-6 py-2 text-sm font-semibold text-indigo-700 bg-indigo-100 border border-transparent rounded-lg shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-slate-700 dark:text-indigo-300 dark:hover:bg-slate-600 dark:focus:ring-offset-slate-800"
            >
                Retry Quiz
            </button>
            <button 
                onClick={onExit}
                className="px-6 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-slate-600 dark:text-slate-200 dark:border-slate-500 dark:hover:bg-slate-500 dark:focus:ring-offset-slate-800"
            >
                Exit to Dashboard
            </button>
        </div>
    </div>
  );
};

export default QuizSummary;