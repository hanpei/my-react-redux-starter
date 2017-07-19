module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', 'ios >= 8', 'android >= 4'],
    },
  },
};
