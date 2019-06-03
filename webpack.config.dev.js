const base = require('./webpack.config');
module.exports = {
  ...base,
  mode: 'development',
  devServer: {
    contentBase: './dist/lib'
  },
};
