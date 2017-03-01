const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// ExtractTextPlugin在生产环境中使用，否则无法实现css_modules的hot-reload
const loaders = require('./webpack-loaders.js');

module.exports = merge(
  common,
  {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/index',
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
    module: {
      rules: [
        loaders.babel,
        loaders.cssModules,
        loaders.cssLink,
      ],
    },
  });

