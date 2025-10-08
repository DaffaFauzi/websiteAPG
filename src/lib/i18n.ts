// Import translation resources
import enCommon from '../locales/en/common.json';
import idCommon from '../locales/id/common.json';
import msCommon from '../locales/ms/common.json';
import zhCommon from '../locales/zh/common.json';
import ruCommon from '../locales/ru/common.json';

export const resources = {
  en: {
    common: enCommon,
  },
  id: {
    common: idCommon,
  },
  ms: {
    common: msCommon,
  },
  zh: {
    common: zhCommon,
  },
  ru: {
    common: ruCommon,
  },
};

export type Language = keyof typeof resources;
export type TranslationKey = string;

// Simple translation function
export const getTranslation = (key: TranslationKey, language: Language = 'en'): string => {
  const keys = key.split('.');
  let value: unknown = resources[language]?.common;

  for (const k of keys) {
    if (value && typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // Fallback to English if key not found
      value = resources.en?.common;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && value !== null && fallbackKey in value) {
          value = (value as Record<string, unknown>)[fallbackKey];
        } else {
          return key; // Return key if not found in English either
        }
      }
      break;
    }
  }

  return typeof value === 'string' ? value : key;
};