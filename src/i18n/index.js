import {isDevelopmentOrTest} from '../utils/commonfunctions';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

const DEBUG = true;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: isDevelopmentOrTest() && DEBUG,
    lng: 'english',
    fallbackLng: 'english',
    keySeparator: false,
    returnEmptyString: false,
    backend: {
      loadPath: 'https://api.covid19india.org/locales/locale_{{lng}}.json'
    },
    saveMissing: isDevelopmentOrTest() && DEBUG,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
