const base = require('./webpack.config');

module.exports = {
  ...base,
  mode: 'production',
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
};
