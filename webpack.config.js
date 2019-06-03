const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const absPath = dir => path.resolve(__dirname, `./${dir}`);
module.exports = {
  mode: 'production',
  entry: {
    main: './lib/index.tsx'
  },
  output: {
    path: absPath('dist/lib'),
    library: 'WUI', // bundle文件的名称
    // Universal Module Definition
    // universal: 普遍的，通用的
    // amd,commonjs,umd: https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
    libraryTarget: 'umd'
  },
  // loader: 让webpack能够去处理那些非javascript文件
  module: {
    rules: [
      {
        // ? : 匹配前面一个表达式0次或者1次。这里可以匹配到.ts或者.tsx文件
        // $ : 匹配输入的结束
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  devServer: {
    contentBase: './dist/lib'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WUI',
      template: 'index.html'
    }),
  ],
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
  // performance: {
  //   hints: false
  // }
};
