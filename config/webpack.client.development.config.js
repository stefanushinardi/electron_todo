const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require(path.join(__dirname, "config.js"));
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: config.client_entry,
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, '..','build','static'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    timings: true,
  },
  sassLoader: {
    includePaths: config.sass_include_paths
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel','import-glob-loader'], 
        exclude: [path.resolve(__dirname, "../node_modules")],
      },
      {
        test:/\.css$/,
        loaders: ["style-loader","css-loader"]
      },
      {
        test:/\.(scss|sass)$/,
        loaders: ["style-loader","css-loader","sass-loader",'import-glob-loader']
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
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HTMLWebpackPlugin({
      title: 'react framework',
      template : config.html_index_template_path,
      inject: 'body'
    })
  ]
};
