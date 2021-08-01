var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development', //开发中使用development 会加很多注释, 发布的就改成production
  entry: './src/index.js', //输入
  output: { //输出
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'frank',
    filename: 'index1.html',
    template: 'src/assets/index.html' //用test.html这个模版生成html
  }), new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
    ignoreOrder: false
  })],
  module: {
    rules: [{
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    }, ],
  },
}