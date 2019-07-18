const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const absPath = dir => path.resolve(__dirname, `${dir}`);
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    example: absPath('../lib/example.tsx')
  },
  output: {
    path: absPath('../build'),
    filename: '[name]_[hash:8].js',
    library: 'WUI', // bundle文件的名称
    // Universal Module Definition
    // universal: 普遍的，通用的
    // amd,commonjs,umd: https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
    libraryTarget: 'umd'
  },
  // stats: 'errors-only',
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
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3
            }
          }, // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Or array of paths
              resources: [absPath('../lib/assets/styles/helper.scss')]
            },
          }, // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        // use: ['file-loader'],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'WUI',
      filename: 'index.html',
      template: absPath('../example.html')
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  // performance: {
  //   hints: false
  // }
};
