const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ru', 'en'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  ignoreRoutes: ['/_next/', '/static/', '/public/', '/api/', '/favicon.ico'],
});

export const {
  appWithTranslation,
  withTranslation,
  Router,
  Link,
  i18n,
} = NextI18NextInstance;
