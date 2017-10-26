const PATH = require('./webpack-path.js');

const common = {
  output: {
    path: PATH.dist,
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    // add alias for application code directory
    extensions: ['.js'],
  },
};

module.exports = common;
