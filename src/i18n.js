import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources:  {
        en: {
          translation: {
            'GP full name': 'Greater Phoenix Chinese Christian Church',
            'Cantonese service': 'Cantonese service',
            'English service': 'English service',
            'Mandarin service': 'Mandarin service',
          }
        },
        zh: {
          translation: {
            'GP full name': '鳳凰城華人基督教會',
            'Cantonese service': '粵語崇拜', // TODO: Cantonese worship
            'English service': '英語崇拜', // TODO: English worship
            'Mandarin service': '華語崇拜', // TODO: Chinese worship
          }
        },
        zf: {
          translation: {
            'GP full name': '凤凰城华人基督教会',
            'Cantonese service': '粤语崇拜', // TODO: Cantonese worship
            'English service': '英语崇拜', // TODO: English worship
            'Mandarin service': '华语崇拜', // TODO: Chinese worship
          }
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;