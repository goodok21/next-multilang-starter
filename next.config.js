// Plugins
// const withPlugins = require('next-compose-plugins');
// Environment
// const nextEnv = require('next-env');
// const dotenvLoad = require('dotenv-load');
// dotenvLoad();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const localeSubpaths = { en: 'en', ru: 'ru' };

const nextConfig = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config, { webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

      // if (isServer) {
      // Uncomment to generate sitemap (not sure you need it)
      // require('./utils/generate-sitemap');
      // }

      // Favions
      config.plugins.push(
        new FaviconsWebpackPlugin({
          // Your source logo (required)
          logo: './public/favicon.png',
          // Enable caching and optionally specify the path to store cached data
          // Note: disabling caching may increase build times considerably
          cache: false,
          // Override the publicPath option usually read from webpack configuration
          publicPath: '/public',
          // The directory to output the assets relative to the webpack output dir.
          // Relative string paths are allowed here ie '../public/static'. If this
          // option is not set, `prefix` is used.
          outputPath: '/public/favicons',
          // Prefix path for generated assets
          // prefix: 'assets/',
          inject: true,

          // Favicons configuration options (see below)
          favicons: {
            appName: 'my-app',
            appDescription: 'application',
            developerName: 'developer',
            developerURL: null, // prevent retrieving from the nearest package.json
            background: '#ddd',
            theme_color: '#333',
            icons: {
              appleIcon: true,
              android: true,
              favicons: true,
            },
          },
        })
      );

      return config;
    },

    // trailingSlash: false,
    rewrites: async () => [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
      // {
      //   source: '/graphql',
      //   destination: `https://qw/graphql`,
      // },
      ...nextI18NextRewrites(localeSubpaths),
    ],
    publicRuntimeConfig: {
      localeSubpaths,
    },
  };
};

module.exports = nextConfig;

// module.exports = withPlugins([nextEnv, withBundleAnalyzer], nextConfig);
