import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';

import translationDE from '@/locales/de.json';
import translationEN from '@/locales/en.json';
import translationVI from '@/locales/vi.json';

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
  de: { translation: translationDE },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

// i18n.changeLanguage('en'); => change language

export default i18n;
