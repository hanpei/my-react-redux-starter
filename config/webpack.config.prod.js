const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const loaders = require('./webpack-loaders.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATH = require('./webpack-path');

module.exports = merge(
  common,
  {
    devtool: 'source-map',
    entry: [
      `${PATH.src}/index.js`,
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
      new ExtractTextPlugin('css/bundle.css'),
    ],
    module: {
      rules: [
        loaders.babel,
        loaders.cssModulesExtract,
        loaders.cssLink,
      ],
    },
  });
