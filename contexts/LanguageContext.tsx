import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const storedLanguage = localStorage.getItem('language_preference');
      if (storedLanguage === 'jp' || storedLanguage === 'my' || storedLanguage === 'jp-only') {
        return storedLanguage;
      }
    } catch (error) {
      console.error("Could not read language from localStorage", error);
    }
    return 'my'; // Default to Burmese
  });

  useEffect(() => {
    try {
      localStorage.setItem('language_preference', language);
    } catch (error) {
      console.error("Failed to save language to localStorage", error);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => {
      if (prevLanguage === 'my') return 'jp';
      if (prevLanguage === 'jp') return 'jp-only';
      return 'my'; // from 'jp-only' back to 'my'
    });
  };

  const value = { language, toggleLanguage };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};