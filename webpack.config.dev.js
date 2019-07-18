const base = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: './dist/lib',
    // 当使用react-router-dom的BrowserRouter时，任意的404响应都可能需要被替代为index.html。通过下面属性启用
    // historyApiFallback: true // 这里我们用HashRouter
  },
});
