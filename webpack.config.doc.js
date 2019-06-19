const path = require('path');
const base = require('./webpack.config');
const absPath = dir => path.resolve(__dirname, `./${dir}`);

module.exports = {
  ...base,
  output: {
    path: absPath('build')
  }
};
