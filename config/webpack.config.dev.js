const base = require('./webpack.config');
const path = require('path');
const absPath = dir => path.resolve(__dirname, `${dir}`);
const merge = require('webpack-merge');
module.exports = (env) => merge(base(env), {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: absPath('../dist'),
    // 当使用react-router-dom的BrowserRouter时，任意的404响应都可能需要被替代为index.html。通过下面属性启用
    // historyApiFallback: true // 这里我们用HashRouter
    hot: true
  }
});
