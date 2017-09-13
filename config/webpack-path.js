const path = require('path');
// We define some paths to be used throughout the webpack config
const ROOT = path.join(process.cwd());
module.exports = {
  root: path.join(ROOT, '/'),
  src: path.join(ROOT, 'src'),
  styles: path.join(ROOT, 'src/styles'),
  fonts: path.join(ROOT, 'src/assets/fonts'),
  dist: path.join(ROOT, 'dist'),
  css: path.join(ROOT, 'dist/css'),
};
