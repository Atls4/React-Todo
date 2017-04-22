const path = require("path");
const webpack = require("webpack")

module.exports = {
  context: path.resolve(__dirname,'./src/js'),
  entry: {
    client: './client.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath:'/src',
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, './src'),
  // },
  devtool:'source-map',

  module: {
    rules:[
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      use: [
      {
        loader: 'babel-loader',
        options: { presets: ['es2015','react']}
      }
      ],
    },
    //OTHER LOADERS
    ],
  },

};
