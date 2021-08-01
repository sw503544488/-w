const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const base = require('./webpack.config.js')

module.exports = {
  ...base, //把base的所有属性复制到当前位置
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
    ]
  }
};