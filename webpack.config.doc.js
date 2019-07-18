const path = require('path');
const base = require('./webpack.config');
const absPath = dir => path.resolve(__dirname, `./${dir}`);
const merge = require('webpack-merge');
module.exports = merge(base, {
  output: {
    path: absPath('build')
  }
});
