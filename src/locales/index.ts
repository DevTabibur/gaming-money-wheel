import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from './lang/english.json'
import bangla from './lang/bangla.json'
import hindi from './lang/hindi.json'
import russian from './lang/russian.json'
import spanish from './lang/spanish.json'
import china from './lang/china.json'

// ** DUMMY APP CONFIG FOR INITIAL TESTING // WE HAVE TO MOVE IT IN ANOTHER COMPONENT
const appConfig = {
  locale: 'en',
  enableMock: true,
}

//** */ Language resources
const resources = {
  en: {
    translation: english,
  },
  bn: {
    translation: bangla,
  },
  hn: {
    translation: hindi,
  },
  ru: {
    translation: russian,
  },
  sn: {
    translation: spanish,
  },
  ch: {
    translation: china,
  },
}

// ** Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: appConfig.locale,
  lng: appConfig.locale,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export const dateLocales = {
  en: () => import('dayjs/locale/en'),
  bn: () => import('dayjs/locale/bn'),
}

export default i18n
