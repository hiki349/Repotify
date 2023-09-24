import { enLocale, ruLocale } from '@static/locales';

export const useTranslate = (locale: string) => {
  let localeData = {};
  switch (locale) {
    case 'en':
      localeData = enLocale;
      break;
    case 'ru':
      localeData = ruLocale;
      break;
    default:
      localeData = enLocale;
      break;
  }

  const getValue = (key: string) => {
    if (key in localeData) return (localeData as { [key: string]: string })[key];
    return null;
  };

  return { translate: getValue };
};
