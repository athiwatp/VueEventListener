const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': resolve('client')
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('client/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
  ]
}