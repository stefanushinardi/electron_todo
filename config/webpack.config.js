var path = require('path');
var webpack = require('webpack');
//var css = require("!css!sass!./file.scss");

var BUILD_DIR = path.resolve(__dirname, '../build');
var APP_DIR = path.resolve(__dirname, '../src/client/client.jsx');

var config = {
  output: {
    path: BUILD_DIR,
    filename: 'script.js',
    sourceMapFilename: "source.map"
  },
  stats: {
    colors: true,
    timings: true,
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, "../node_modules/compass-mixins/lib")]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../node_modules/react-routing/src'),
          path.resolve(__dirname, '../src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.html?$/,
        include: [
          path.resolve(__dirname, '../src/client/view')
        ],
        loader: 'html'
      },
      {
        test:/\.css$/,
        loaders: ["css"]
      },
      {
        test:/\.(scss|sass)$/,
        loaders: ["sass"]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader'
      }
    ]
  }
};
module.exports = config;

