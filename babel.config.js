// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@app': './src/',
            '@screens': './src/screens',
            '@components': './src/components',
            '@assets': './assets',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
        },
      ],
    ],
  };
};
