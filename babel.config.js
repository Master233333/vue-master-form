module.exports = {
  presets: [
    [
      '@vue/babel-preset-jsx',
      {
        functional: false
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-env'
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
    [
      'babel-plugin-transform-remove-console',
      {
        exclude: ['error', 'warn'],
      },
    ],
  ],
};
