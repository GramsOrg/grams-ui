import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_config from './en.json';
import ar_config from './ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: en_config,
    ar: ar_config,
  },
  returnNull: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
