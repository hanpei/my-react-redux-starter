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
        'process.env.DIST_ENV': JSON.stringify('prod'),
        // GLOBAL_ENV: JSON.stringify('prod'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        outeput: {
          comments: false //remove all comments
        },
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,
          unused: true,    // Enables tree shaking
          dead_code: true, // Enables tree shaking
          pure_getters: true,
          screw_ie8: true,
          conditionals: true,
          comparisons: true,
          sequences: true,
          evaluate: true,
          join_vars: true,
          if_return: true,
        },
      }),
    ],
  });
