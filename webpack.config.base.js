const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BASE_PLUGINS = [
  new HtmlWebpackPlugin({
      template: './src/index.html.ejs'
  })
]

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: BASE_PLUGINS,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader',
               {
                 loader: 'css-loader'
               }
             ]
      },
      {
        test: /.(jpg|png|svg)$/,
        use: ['file-loader']
      }
    ]
  }
};
