const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const dist = require('./webpack.config.dist');

module.exports = merge(
  common,
  dist,
  {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.DIST_ENV': JSON.stringify('qa'),
      }),
    ],
  });
