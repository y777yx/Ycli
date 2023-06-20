const path = require('path') // node的地址解析模块
const HtmlWebpackPlugin = require('html-webpack-plugin') // html的plugin

module.exports = {
  entry: { // 入口文件
    index: './index.js'
  },
  output: { // 出口文件
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [ // loader规则
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({ // html的plugin（插件）
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      chunks: ['index']
    })
  ],
  mode: 'development',
  devServer: {
    static: [
      // path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public') // 
    ],
    host: 'localhost', // 本地主机的配置
    port: 8081, // 端口号的配置
    open: true // 是否自动打开网址
  }
}