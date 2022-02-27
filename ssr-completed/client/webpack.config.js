const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const mode = process.env.NODE_ENV;

const output1 =  {
    path: path.join(__dirname, '../server/public'),
    filename: 'ssr.js',
    publicPath : "/",
    library : 'SSR',
    libraryTarget:'commonjs2',
    umdNamedDefine: true,
  
 }
 const output2 = {
   path: path.join(__dirname, './public'),
   filename : 'csr.js',
   publicPath : "/"
 }

 const setDevServer = { 
  port : 8080,
  proxy : {
    "/**" : {
      target: "http://[::1]:3001",
      changeOrigin: true,
      secure: false,
      // onProxyRes: function(proxyRes, req, res){

      //   return proxyRes.send("bypass")
      // }
    }
  }
 }

const setDevServer2 = {
  port : 8081 
}

module.exports = {
    mode,

    target: mode === 'production' ? 'node' : 'web', 
    
    entry: mode === 'production' ? './ssr.js' : './csr.js', 
    
    output : mode === 'production' ? output1 : output2,
    
    externals: mode === 'production' ? [webpackNodeExternals()] : '', 

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude : [
              mode === 'production' 
              ? path.resolve(__dirname, 'csr.js') 
              : path.resolve(__dirname, 'ssr.js')
            ]
          },
        // { 
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   loader: 'babel-loader',
        //   options: { 
        //       presets: [ 
        //         [ '@babel/preset-env', 
        //           { useBuiltIns: "usage", corejs:{ version : 3 } }
        //         ],
        //       ],
        //       plugins : [ 
        //           "@babel/plugin-proposal-object-rest-spread",
        //           "@babel/plugin-proposal-class-properties",
        //           "@babel/plugin-transform-modules-commonjs"
        //         ]
        //   }
        // }
      ],
    },

  //  plugins: [
  //     new HtmlWebpackPlugin({
  //         template: './src/index.html',
  //         filename:'index.html'
  //     }),
  //     new CleanWebpackPlugin(),
  //     new NodePolyfillPlugin(),
  // ],
  devServer: mode === 'production' ? setDevServer2 : setDevServer,
  resolve : {
    fallback : { 
      "fs" : false
    }
  },
  devtool : 'source-map'


};
