'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Map language codes to country codes for flags
  const getCountryCode = (langCode: string) => {
    const countryMap: { [key: string]: string } = {
      en: 'GB',
      id: 'ID',
      ms: 'MY',
      zh: 'CN',
      ru: 'RU',
    };
    return countryMap[langCode] || langCode.toUpperCase();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  return (
    <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
      <div className="relative">
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white rounded-lg shadow-lg border px-4 py-2 hover:bg-gray-50 transition-colors"
        >
          <ReactCountryFlag
            countryCode={getCountryCode(language)}
            svg
            style={{
              width: '20px',
              height: '15px',
            }}
          />
          <span className="text-sm text-gray-700">{currentLanguage?.name}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border min-w-[220px] py-1 z-10">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                  language === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                }`}
              >
                <ReactCountryFlag
                  countryCode={getCountryCode(lang.code)}
                  svg
                  style={{
                    width: '20px',
                    height: '15px',
                  }}
                />
                <span>{lang.name}</span>
                {language === lang.code && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
