const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const apiServerPort = 8080
const apiAddress = process.env.BACKEND_ADDR || 'localhost'
const backendURL = `http://${apiAddress}:${apiServerPort}`

module.exports = {
  entry: ['@babel/polyfill', './src'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8081,
    proxy: [
      {
        context: ['/api'],
        target: backendURL,
      },
    ],
    disableHostCheck: true,
  },
}
