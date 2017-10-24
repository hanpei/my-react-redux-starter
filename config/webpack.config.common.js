const PATH = require('./webpack-path.js');

const common = {
  output: {
    path: PATH.dist,
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    // add alias for application code directory
    alias: {
      components: `${PATH.src}/components`,
      containers: `${PATH.src}/containers`,
      actions: `${PATH.src}/actions`,
      constants: `${PATH.src}/constants`,
      reducers: `${PATH.src}/reducers`,
      utils: `${PATH.src}/utils`,
      base: `${PATH.src}/components/base`,
      api: `${PATH.src}/api`,
    },
    extensions: ['.js'],
  },
};

module.exports = common;
