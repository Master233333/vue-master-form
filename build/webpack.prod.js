const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const DropConsoleWebpackPlugin = require('drop-console-webpack-plugin');

module.exports = merge(config, {
  entry: {
    'index': './src/index.ts',
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
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
    new DropConsoleWebpackPlugin({
      drop_log: true,
      drop_info: true,
      drop_warn: false,
      drop_error: false,
    }),
  ],
});
