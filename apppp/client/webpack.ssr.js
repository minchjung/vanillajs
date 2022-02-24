const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const { library, libraryTarget } = require('webpack');


module.exports = {
  mode: 'production',

  target: 'node',
    
  entry: './ssr.js',
    
  output: {
      path: path.join(__dirname, '../server/public'),
      filename: 'ssr.js',
      publicPath : "/",
      library : 'SSR',
      libraryTarget:'commonjs2',
      umdNamedDefine: true
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
  
  
  // plugins: [
  //     new HtmlWebpackPlugin({
  //         template: './src/index.html',
  //         filename:'index.html'
  //     }),
  //     new CleanWebpackPlugin(),
  //     new NodePolyfillPlugin(),
  // ],
  // devServer: {
  //   port : 8080,
  //   liveReload : true
  //   // proxy : {
  //   //     "/api/*" : {
  //   //       target: "http://[::1]:4000"
  //   //     }
  //   //   },
  // },
  resolve : {
    fallback : { 
      "fs" : false
    }
  }
}