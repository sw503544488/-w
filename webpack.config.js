var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
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
  })],
  module: {
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }, ],
  },
}