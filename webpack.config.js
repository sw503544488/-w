var path = require('path')
module.exports = {
  mode: 'development', //开发中使用development 会加很多注释, 发布的就改成production
  entry: './src/index.js', //输入
  output: { //输出
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
}