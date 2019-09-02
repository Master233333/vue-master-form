module.exports = {
  pages: {
    app: {
      entry: 'src/demo.tsx',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },
  devServer: {
    port: 3002,
  },
};
