const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = { en: 'en', ru: 'ru' };

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    // webpack: (config, { isServer }) => {
    //   if (isServer) {
    //     require('./utils/generate-sitemap');
    //   }

    //   return config;
    // },

    trailingSlash: false,
    rewrites: async () => [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
      {
        source: '/graphql',
        destination: `https://qw/graphql`,
      },
      ...nextI18NextRewrites(localeSubpaths),
    ],
    publicRuntimeConfig: {
      localeSubpaths,
    },
  };
};
