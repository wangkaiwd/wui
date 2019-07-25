const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const absPath = dir => path.resolve(__dirname, `${dir}`);
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const pkg = require('../package');
module.exports = (env) => {
  return {
    entry: {
      example: absPath('../lib/doc/index.tsx')
    },
    output: {
      path: absPath('../dist'),
      filename: '[name]_[hash:8].js',
      chunkFilename: '[name]_[hash:8]_chunk.js',
      library: 'WUI', // bundle文件的名称
      // Universal Module Definition
      // universal: 普遍的，通用的
      // amd,commonjs,umd: https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
      libraryTarget: 'umd'
    },
    stats: 'errors-only',
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
            MiniCssExtractPlugin.loader, // creates style nodes from JS strings
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
        chunks: 'all'
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        title: 'WUI',
        filename: 'index.html',
        template: absPath('../example.html')
      }),
      new AutoDllPlugin({
        inject: true, // will inject the DLL bundle to index.html
        debug: true,
        path: './dll',
        filename: '[name]_[hash:8].js',
        entry: {
          vendor: Object.keys(pkg.dependencies)
        }
      }),
      // 终端报错解决： https://github.com/mzgoddard/hard-source-webpack-plugin/issues/416#issuecomment-411832075
      new HardSourceWebpackPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name]_[hash:8].css',
        chunkFilename: '[name]_[hash:8]_chunk.css'
      })
    ],
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx']
    },
    performance: {
      hints: false
    }
  };
};
