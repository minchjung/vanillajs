const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: 'production',

  target: 'web',
    
  entry: './src/client.js',
    
  output: {
        filename: 'client.js',
        path: path.join(__dirname, './build'),
        publicPath : "/"
  },
  module: {
      rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
            presets: [ 
              [ '@babel/preset-env', 
                { useBuiltIns: "usage", corejs:{ version : 3 } }
              ],
            ],
            plugins : [ 
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-modules-commonjs"
              ]
          }
        },
      ],
    },
  
  
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
      }),
      new CleanWebpackPlugin(),
      new NodePolyfillPlugin(),
  ],
  devServer: {
    port : 8080,
    liveReload : true
    // proxy : {
    //     "/api/*" : {
    //       target: "http://[::1]:4000"
    //     }
    //   },
  },
  resolve : {
    fallback : { 
      "fs" : false
    }
  }
}