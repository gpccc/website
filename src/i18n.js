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
            'GP short name': 'GPCCC',
            'Cantonese service': 'Cantonese service',
            'English service': 'English service',
            'Mandarin service': 'Mandarin service',
            'Seek to': 'Seek to',
            'Opening prayer': 'Opening prayer',
            'Communion': 'Communion',
            'Congregational prayer': 'Congregational prayer',
            'Baptism of Yong Wang': 'Baptism of Yong Wang',
            'Missions at GPCCC': 'Missions at GPCCC',
            'Youth Praise Night': 'Youth Praise Night',
            'Closing prayer': 'Closing prayer',
            'Announcements': 'Announcements',
            'Benediction': 'Benediction',
            'Happy birthday, Pastor Larry': 'Happy birthday, Pastor Larry',
          }
        },
        zh: {
          translation: {
            'GP full name': '鳳凰城華人基督教會',
            'GP short name': '鳳凰城華人基督教會',
            'Cantonese service': '粵語崇拜', // TODO: Cantonese worship
            'English service': '英語崇拜', // TODO: English worship
            'Mandarin service': '華語崇拜', // TODO: Chinese worship
            'Seek to': '尋求',
            'Opening prayer': '宣召',
            'Communion': '聖餐',
            'Congregational prayer': '公禱',
            'Baptism of Yong Wang': '王勇的洗禮',
            'Missions at GPCCC': 'GPCCC的任務',
            'Youth Praise Night': '青年讚美之夜',
            'Closing prayer': '閉幕祈禱',
            'Announcements': '報告',
            'Benediction': '祝禱',
            'Happy birthday, Pastor Larry': '李長橋牧師，生日快樂',
          }
        },
        zf: {
          translation: {
            'GP full name': '凤凰城华人基督教会',
            'GP short name': '凤凰城华人基督教会',
            'Cantonese service': '粤语崇拜', // TODO: Cantonese worship
            'English service': '英语崇拜', // TODO: English worship
            'Mandarin service': '华语崇拜', // TODO: Chinese worship
            'Seek to': '寻求',
            'Opening prayer': '宣召',
            'Communion': '圣餐',
            'Congregational prayer': '公祷',
            'Missions at GPCCC': 'GPCCC的任务',
            'Baptism of Yong Wang': '王勇的洗礼',
            'Youth Praise Night': '青年赞美之夜',
            'Closing prayer': '闭幕祈祷',
            'Announcements': '报告',
            'Benediction': '祝祷',
            'Happy birthday, Pastor Larry': '李長橋牧师，生日快乐',
          }
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    nsSeparator: '|',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;