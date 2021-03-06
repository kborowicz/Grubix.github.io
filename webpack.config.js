const path = require('path');
const { resolve } = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = false;

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './app/index.js',
  output: {
    publicPath: '',
    filename: 'main.[contenthash:8].js',
    path: path.resolve(__dirname, './portfolio'),
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  devtool: isProduction ? undefined : "source-map",
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { 
            loader: "css-loader", 
            options: { 
              url: true, 
              importLoaders: 1, 
              modules: {
                localIdentName: isProduction ? "[hash:base64:5]" : "[name]__[local]"
              }
            } 
          },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg|png)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        resolve('./portfolio/**/*')
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      minify: true,
      template: './app/index.html',
      inject: false
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'app'),
      '@components': path.resolve(__dirname, 'app/components'),
    },
  },
};