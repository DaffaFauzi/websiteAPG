'use client';

import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, availableLanguages } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2 bg-white rounded-lg shadow-lg border p-1">
        {availableLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              language === lang.code
                ? 'bg-indigo-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
