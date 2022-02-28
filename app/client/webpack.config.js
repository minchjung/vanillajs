const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const fs = require('fs')
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
 let count = 0;
 const setDevServer = { 
  port : 8080,
  proxy : {
    "/**" : {
      target: "http://[::1]:3001",
      changeOrigin: true,
      secure: false,
      onProxyReq: async function(proxyReq, req, res){
        if(req.url.includes('api')) return 

        const fileURL = req.url === '/' 
          ? 'index_page?filter=&name=&order=dsc&page=1&size=5&total=200.html'
          : 'index_' + req.url.split('/')[1] + '.html'
        
        const dirURL = path.resolve(__dirname, './resources/', fileURL);
        console.log(dirURL, 'count===================',count++)
        if(fs.existsSync(dirURL)){
          console.log('html good');
          const html = await fs.readFileSync(dirURL, 'utf-8');
          
          return res.status(202).send(html);
        }       
      }
    },

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
