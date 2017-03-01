// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// ExtractTextPlugin在生产环境中使用，否则无法实现css_modules的hot-reload
const PATH = require('./webpack-path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  babel: {
    test: /\.js?/,
    loaders: ['babel-loader'],
    include: PATH.src,
  },
  cssModules: {
    test: /\.(css|scss)$/,
    exclude: PATH.styles,
    loaders: [
      'style-loader',
      'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
      'postcss-loader',
      'sass-loader',
    ],
  },
  cssModulesExtract: {
    test: /\.(css|scss)$/,
    exclude: PATH.styles,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader!sass-loader', // ExtractTextPlugin必须写一起
    }),
  },
  cssLink: {
    test: /\.(css|scss)$/,
    include: PATH.styles,
    loaders: [
      'style-loader',
      'css-loader', // styles目录中的css不使用css_modules
      'postcss-loader',
      'sass-loader',
    ],
  },
};
