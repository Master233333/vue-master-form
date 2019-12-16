const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  entry: {
    'demo': './src/demo.tsx',
  },
  devServer: {
    progress: true,
    port: '4000',
    host: '0.0.0.0'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          name: 'chunks'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
  ]
});
