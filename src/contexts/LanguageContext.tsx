'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getTranslation, resources } from '../lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => unknown;
  availableLanguages: { code: Language; name: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const availableLanguages = [
  { code: 'en' as Language, name: 'English' },
  { code: 'id' as Language, name: 'Bahasa Indonesia' },
  { code: 'ms' as Language, name: 'Bahasa Melayu' },
  { code: 'zh' as Language, name: '中文' },
  { code: 'ru' as Language, name: 'Русский' },
];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && storedLang in resources) {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => getTranslation(key, language);

  const value = {
    language,
    setLanguage,
    t,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
