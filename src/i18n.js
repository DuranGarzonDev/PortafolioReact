import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DATA } from './constants/data';

const resources = {
  en: { translation: DATA.en },
  es: { translation: DATA.es }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma por defecto
    interpolation: { escapeValue: false }
  });

export default i18n;