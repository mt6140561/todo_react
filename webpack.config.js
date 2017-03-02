const path = require('path');
var webpack = require("webpack");




const config = {
  entry: "\\de.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    loaders: [{
        
        loader: "babel",
    }]
  }
};

module.exports = config;