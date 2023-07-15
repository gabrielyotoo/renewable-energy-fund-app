import { getLocales } from 'expo-localization';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enus from './enus';

const languageDetector = {
  detect: () => getLocales().shift()?.languageCode,
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(initReactI18next)
  .use({
    type: 'languageDetector',
    ...languageDetector,
  })
  .init({
    fallbackLng: 'en-US',
    compatibilityJSON: 'v3',
    resources: {
      'en-US': { translation: enus },
    },
  })
  .catch((_e) => 0);
