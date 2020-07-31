const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = { en: 'en', de: 'de' };

module.exports = {
  trailingSlash: false,
  rewrites: async () => [...nextI18NextRewrites(localeSubpaths)],
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
