module.exports = 
  { 
    mode: 'development',
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