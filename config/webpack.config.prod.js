const base = require('./webpack.config');
const merge = require('webpack-merge');
const path = require('path');
const absPath = dir => path.resolve(__dirname, `${dir}`);
module.exports = (env) => merge(base(env), {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    main: absPath('../lib/index.tsx')
  },
  output: {
    filename: '[name].js',
    library: 'WUI', // bundle文件的名称
    // Universal Module Definition
    // universal: 普遍的，通用的
    // amd,commonjs,umd: https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
    libraryTarget: 'umd',
  },
  // external: 外面的，外部的；表面上的
  // 提供了从输出的bundle中排除依赖的方法。
  // 官方文档： https://webpack.docschina.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    }
  }
});
