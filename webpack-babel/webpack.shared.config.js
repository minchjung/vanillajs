// ./webpack.shared.config.js

module.exports = {
  mode: 'development',

  module: {
      rules: [
          { 
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: { 
                presets: [ 
                  '@babel/preset-env', 
                  {
                    useBuiltIns: "usage",
                    corejs:{ version : 3 }
                  },
                  '@babel/preset-react'
                ],
                plugins : [ 
                  "@babel/plugin-transform-react-jsx",
                  "@babel/plugin-proposal-object-rest-spread",
                  "@babel/plugin-proposal-class-properties",
                ]
            }
          },
      ],
  },

  resolve: {
      extensions: ['.js', 'jsx','.less'], // [C]
  },
};