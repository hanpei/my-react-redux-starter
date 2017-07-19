const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const loaders = require('./webpack-loaders.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATH = require('./webpack-path');
const fs = require('fs');

module.exports = merge(
  common,
  {
    devtool: 'source-map',
    entry: [
      `${PATH.src}/index.js`,
    ],
    output: {
      path: PATH.dist,
      filename: 'bundle.[hash].js',
      publicPath: '/dist/',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.RUN_IN_BROWSER': JSON.stringify('no')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
      new ExtractTextPlugin('css/bundle.[hash].css'),
      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: false, // 因为要延迟加载bundle，不能直接inject到body
      }),

      // 自定义plugin,替换bundle为bundle.[hash]
      function () {
        this.plugin('done', (stats) => {
          const replaceInFile = function (filePath, toReplace, replacement) {
            const replacer = function (match) {
              console.log('Replacing in %s: %s => %s', filePath, match, replacement);
              return replacement;
            };
            const str = fs.readFileSync(filePath, 'utf8');
            const out = str.replace(new RegExp(toReplace, 'g'), replacer);
            fs.writeFileSync(filePath, out);
          };

          const hash = stats.hash; // Build's hash, found in `stats` since build lifecycle is done.

          replaceInFile(`${PATH.dist}/index.html`, 'bundle.js', `bundle.${hash}.js`);
          replaceInFile(`${PATH.dist}/index.html`, 'css/bundle.css', `css/bundle.${hash}.css`);
        });
      },
    ],
    module: {
      rules: [
        loaders.babel,
        loaders.cssModulesExtract,
        loaders.cssLinkExtract,
        loaders.fonts,
      ],
    },
  });
