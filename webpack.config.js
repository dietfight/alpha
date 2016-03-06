var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.js', // Appʼs entry point
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&overlay=true&noInfo=false&quiet=false'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: path.join(__dirname, '/node_modules/')
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less/,
        loader: 'style!css-loader!less-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
