const NextI18Next = require('next-i18next').default;
const getConfig = require('next/config');
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ru'],
  localeSubpaths: getConfig.default().publicRuntimeConfig.localeSubpaths,
  localePath: path.resolve('./public/locales'),
  ignoreRoutes: [
    '/_next/',
    '/static/',
    '/api/',
    '/graphql',
    '/locales',
    '/assets',
    '/service-worker.js',
  ],
});
