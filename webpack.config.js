var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    javascript: './js/index.js',
    html: './index.html'  },
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: '/bundle.js'
  },
  debug: true,
  devtool: "#eval-source-map",
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        plugins: [['antd', {style:'css'}]],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader'
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};