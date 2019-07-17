var path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devtool: 'sourcemap',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader:'css-loader' },
          { loader:'postcss-loader' } //利用postcss-loader自动添加css前缀
        ]
      },
      {
        test: /\.less$/,
        use: [ 'style-loader' , 'css-loader' , 'less-loader' ]
      },
      {
        test:/\.(jpg|gif|png|bmp|svg)$/,
        use:'url-loader?limit=10240&name=[hash:7]-[name].[ext]'
      }
    ]
  },
  plugins:[
    // new ExtractTextPlugin('style.css'),
    new htmlWebpackPlugin({
    template: path.join(__dirname,"./src/index.html"),
    filename: "index.html",
    minify:{
        collapseWhitespace: true, // 合并空白字符
        removeComments: false, // 移除注释
        removeAttributeQuotes: false // 移除属性上的引号
      }
    })
  ]
};
