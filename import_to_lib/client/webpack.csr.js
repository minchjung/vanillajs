const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : "development",

    target: 'web', 

    entry: './csr.js',

    output: { 
        path: path.join(__dirname, './build'), 
        filename: 'csr.js',
    },

    externals: [webpackNodeExternals()], 
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
          {
            test: /\.json$/,
            loader: 'json-loader'
          }

        ],
      },
   plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
          filename:'index.html'
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


};
