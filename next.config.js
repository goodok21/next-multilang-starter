const withPlugins = require('next-compose-plugins');
const nextBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextPWA = require('next-pwa');

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
dotenvLoad();

const { nextI18NextRewrites } = require('next-i18next/rewrites');
const localeSubpaths = require('./localeSubpaths');

// Don't use nextConfiguration as a function
const nextConfiguration = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

module.exports = withPlugins(
  [
    nextEnv,
    nextBundleAnalyzer,
    [
      nextPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV === 'development',
          register: true,
          scope: '/',
          sw: '/service-worker.js',
          dest: 'public',
        },
      },
    ],
  ],
  nextConfiguration
);
