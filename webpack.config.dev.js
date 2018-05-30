const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  serve: {
    host: "127.0.0.1",
    add: (app, middleware, options) => {
      app.use(convert(history()));
    },
    hot: true
  }
});
