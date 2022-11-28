import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { EN, ES } from './locale';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: EN,
      },
      es: {
        translation: ES,
      },
    },
  });

export default i18n;
