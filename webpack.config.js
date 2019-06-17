const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const absPath = dir => path.resolve(__dirname, `./${dir}`);
module.exports = {
  entry: {
    example: './lib/example.tsx'
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Or array of paths
              resources: [absPath('lib/assets/styles/helper.scss')]
            },
          }, // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WUI',
      template: 'example.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  // performance: {
  //   hints: false
  // }
};
