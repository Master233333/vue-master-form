module.exports = {
  presets: [
    [
      '@vue/babel-preset-jsx',
      {
        functional: false
      }
    ],
    '@babel/preset-typescript'
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
  ]
};
