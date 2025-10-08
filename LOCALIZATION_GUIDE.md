# Localization System Guide

This guide explains how to use the i18next-based localization system implemented in this Next.js project.

## 🚀 Overview

The project uses **react-i18next** for internationalization (i18n), allowing you to easily add multiple languages and manage translations.

## 📁 Project Structure

```
src/
├── locales/           # Translation files
│   ├── en/           # English translations
│   │   └── common.json
│   ├── id/           # Bahasa Indonesia translations
│   │   └── common.json
│   ├── ms/           # Malay translations
│   │   └── common.json
│   ├── zh/           # Chinese translations
│   │   └── common.json
│   └── ru/           # Russian translations
│       └── common.json
├── lib/
│   └── i18n.ts       # i18next configuration
├── hooks/
│   └── useTranslation.ts  # Custom translation hook
└── components/
    ├── ui/
    │   └── LanguageSwitcher.tsx  # Language switching component
```

## 🔧 Configuration

### Custom i18n Setup (`src/lib/i18n.ts`)

The custom i18n implementation includes:
- **Client-side Only**: No SSR issues with React 19 compatibility
- **Simple Translation Function**: Direct key lookup with English fallback
- **Type Safety**: Full TypeScript support with proper types
- **Lightweight**: No external dependencies, pure JavaScript solution

### Context-Based Language Management (`src/contexts/LanguageContext.tsx`)

The React Context provides:
- **Language State**: Managed with localStorage persistence
- **Translation Hook**: `useTranslation()` for easy component integration
- **Language Switching**: Instant language changes with re-rendering
- **Available Languages**: Centralized language configuration

### Translation Files

Each language has its own directory with JSON files:
```json
// src/locales/en/common.json
{
  "hero": {
    "headline": "Empowering Enterprises with Quantum-Driven Transformation",
    "subheadline": "We help you automate, integrate, and innovate faster than ever.",
    "ctaText": "Start Your Digital Evolution",
    "learnMore": "Learn More"
  }
}
```

## 🛠️ Usage

### Using the Translation Hook

```tsx
import { useTranslation } from '@/contexts/LanguageContext';

const MyComponent = () => {
  const { t, setLanguage, language, availableLanguages } = useTranslation();

  return (
    <div>
      <h1>{t('hero.headline')}</h1>
      <button onClick={() => setLanguage('id')}>
        Switch to Bahasa Indonesia
      </button>
      {/* Language switcher */}
      {availableLanguages.map(lang => (
        <button key={lang.code} onClick={() => setLanguage(lang.code)}>
          {lang.name}
        </button>
      ))}
    </div>
  );
};
```

### Available Hook Methods

- `t(key)`: Translate a key
- `setLanguage(languageCode)`: Change the current language
- `language`: Get the current language code
- `availableLanguages`: Array of available languages with codes and names

### Language Switcher Component

A ready-to-use language switcher is available:

```tsx
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Layout() {
  return (
    <div>
      <LanguageSwitcher />
      {/* Your content */}
    </div>
  );
}
```

## 🌍 Adding New Languages

### 1. Create Language Directory

```bash
mkdir src/locales/fr  # For French
```

### 2. Create Translation File

```json
// src/locales/fr/common.json
{
  "hero": {
    "headline": "Autonomiser les Entreprises avec une Transformation Quantique",
    "subheadline": "Nous vous aidons à automatiser, intégrer et innover plus rapidement que jamais.",
    "ctaText": "Commencez Votre Évolution Numérique",
    "learnMore": "En Savoir Plus"
  }
}
```

### 3. Update i18n Configuration

```typescript
// src/lib/i18n.ts
import idCommon from '../locales/id/common.json';
import msCommon from '../locales/ms/common.json';
import zhCommon from '../locales/zh/common.json';
import ruCommon from '../locales/ru/common.json';

const resources = {
  en: { common: enCommon },
  id: { common: idCommon },
  ms: { common: msCommon },
  zh: { common: zhCommon },
  ru: { common: ruCommon },
};
```

### 4. Update Language Switcher

```tsx
// src/components/ui/LanguageSwitcher.tsx
const languages = [
  { code: 'en', name: 'English' },
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Bahasa Melayu' },
  { code: 'zh', name: '中文' },
  { code: 'ru', name: 'Русский' },
];
```

## 📝 Translation Keys Structure

### Current Structure

```
common.json
├── hero
│   ├── companyTagline
│   ├── headline
│   ├── subheadline
│   ├── ctaText
│   ├── learnMore
│   └── trustIndicators
│       ├── security
│       ├── platform
│       └── solutions
```

### Adding New Sections

```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact"
  },
  "footer": {
    "copyright": "© 2024 Quantum Dynamics Creations. All rights reserved."
  }
}
```

## 🔄 Best Practices

### 1. Key Naming
- Use lowercase with underscores: `hero_headline`
- Group related keys: `hero.headline`, `hero.subheadline`
- Keep keys descriptive but concise

### 2. Plurals and Context
```json
{
  "item": "item",
  "item_plural": "items",
  "itemWithCount": "{{count}} item",
  "itemWithCount_plural": "{{count}} items"
}
```

### 3. Interpolation
```json
{
  "welcome": "Hello {{name}}!",
  "itemsCount": "You have {{count}} items in your cart"
}
```

```tsx
t('welcome', { name: 'John' })
t('itemsCount', { count: 5 })
```

### 4. HTML Content
For HTML content in translations:
```json
{
  "description": "<strong>Bold text</strong> and <em>italic text</em>"
}
```

```tsx
<div dangerouslySetInnerHTML={{ __html: t('description') }} />
```

## 🚀 Advanced Features

### 1. Language Detection Priority
The system checks languages in this order:
1. `localStorage` (user preference)
2. Browser `navigator` language
3. HTML `lang` attribute
4. Fallback to English

### 2. Persistent Language Selection
Language choice is automatically saved to localStorage and persists across sessions.

### 3. Namespace Support
The system is set up to support multiple namespaces for larger applications:

```typescript
// For different sections of your app
const { t: tCommon } = useTranslation('common');
const { t: tAdmin } = useTranslation('admin');
```

## 🐛 Troubleshooting

### Common Issues

1. **Translations not updating**: Make sure to restart the dev server after adding new translation files.

2. **Language not switching**: Check that the language code matches exactly (case-sensitive).

3. **Missing translations**: Verify the key path exists in all language files.

4. **Console errors**: Enable debug mode in development to see detailed logs.

5. **Build Issues**: If you encounter module resolution errors during build, the custom implementation is designed to work without external i18n dependencies.

### Debug Mode

In development, set `debug: true` in `i18n.ts` to see console logs about missing keys and language detection.

## 📚 Resources

- [react-i18next Documentation](https://react.i18next.com/)
- [i18next Documentation](https://www.i18next.com/)
- [Translation Management Tools](https://www.i18next.com/overview/tools-and-services)

---

## 🎯 Next Steps

1. ✅ **Basic Implementation Complete**: All 5 languages working (EN, ID, MS, ZH, RU)
2. Add more languages as needed by following the pattern
3. Consider using a translation management service like Locize or Crowdin for larger projects
4. Implement date/number formatting for different locales if required
5. Add RTL (right-to-left) language support if expanding to Arabic/Hebrew

## ✅ **Current Status**

- ✅ **Build Success**: npm run build works without errors
- ✅ **SSR Compatible**: Works with Next.js 15 + Turbopack
- ✅ **React 19 Compatible**: No createContext issues
- ✅ **Type Safe**: Full TypeScript support
- ✅ **Lightweight**: No external dependencies
- ✅ **Persistent**: Language choice saved in localStorage

This custom localization system provides a robust, lightweight foundation for multi-language support! 🌍✨
