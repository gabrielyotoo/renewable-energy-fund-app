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
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
