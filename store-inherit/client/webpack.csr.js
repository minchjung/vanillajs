const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : "development",

    target: 'web', 
    
    entry: './src/csr.js',

    output: { 
        path: path.join(__dirname, './public'), 
        filename: 'csr.js',
        publicPath : '/',
    },

    // externals: [webpackNodeExternals({ importType : 'umd'})], 
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
          // {
          //   test: /\.json$/,
          //   loader: 'json-loader'
          // }

        ],
      },
  //  plugins: [
  //     new HtmlWebpackPlugin({
  //         template: './index.html',
  //         filename:'index.html'
  //     }),
  //     new CleanWebpackPlugin(),
  //     new NodePolyfillPlugin(),
  // ],
  devServer: {
    port : 8080,
    proxy : {
        "/**" : {
          target: "http://[::1]:3001"
        }
      },
  },
  resolve : {
    fallback : { 
      "fs" : false
    }
  }


};
