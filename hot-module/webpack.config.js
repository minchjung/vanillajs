const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = [
  { 
    mode: 'development',

    entry: [ './src/index.js' ],
    
    output: { 
      path: path.join(__dirname, './build'), 
      filename: 'bundle.js',
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
                  ]
              }
            },
        ],
    },

  // resolve: {
  //   extensions: ['.js','.less'],
  // },

  }, 
  { 
    mode: 'development',

    entry: [ './src/client/index.js' ],
    
    output: { 
      path: path.join(__dirname, './build'), 
      filename: 'index.html',
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
                  ]
              }
            },
        ],
    },
  }
  
  
]