const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

const NextI18NextInstance = new NextI18Next({
  otherLanguages: ['ru'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});

export const {
  appWithTranslation,
  withTranslation,
  Router,
  Link,
  i18n,
} = NextI18NextInstance;
