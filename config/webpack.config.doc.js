const path = require('path');
const base = require('./webpack.config');
const absPath = dir => path.resolve(__dirname, `${dir}`);
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => merge(base(env), {
  mode: 'production',
  devtool: 'none',
  output: {
    path: absPath('../build')
  },
  plugins: [
    env.MODE === 'analysis' && new BundleAnalyzerPlugin()
  ].filter(Boolean)
});
