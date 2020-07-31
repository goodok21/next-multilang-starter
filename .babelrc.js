module.exports = function (api) {
  const isDev = !api.env("production")

  return {
    presets: ['next/babel'],
    plugins: [
      [
        'styled-components',
        {
          ssr: true,
          displayName: isDev,
          fileName: isDev,
          preprocess: !isDev,
          minify: !isDev,
          pure: !isDev,
        },
      ],
    ],
  };
};
