//nodejs 要指定任何檔案路徑都要靠叫 path 的 api 來做，用 require 的方式來引入 path 的模組
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  //  指定一開始的路徑，__dirname 在 nodejs 裡代表一個變數，指的是當前執行文件的目錄名稱，所以我們要設定path.resolve第一個參數__dirname，然後指定第二個參數，從src資料夾開始找檔案。
  // context: path.resolve(__dirname, 'src'),
  // entry:進入點，專案執行時先從 index.js 開始
  entry: './src/index.js',
  // output:輸出點，專案打包後輸出的檔名和檔案路徑
  output: {
      filename: 'index.build.js',
      path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true
  }
};
