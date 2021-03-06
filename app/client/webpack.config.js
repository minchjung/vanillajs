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

 const setDevServer = { 

  port : 8080,
  proxy : {
    "/**" : {
      target: "http://[::1]:3001",
      changeOrigin: true,
      secure: false,

      onProxyReq: async function(proxyReq, req, res){

        if(String(req.method )=== 'POST' || req.method === 'DELETE'){
          const resources = path.resolve(__dirname, './resources');
          
          if(fs.existsSync(resources)){
            
            fs.rm( resources, { recursive : true }, async (err) => {
              if(err) return console.log('error to delete direct resoucers',err);
              console.log('delete success from =', req.method)
              
              await fs.mkdirSync( resources , (err) => {
                if(err) return console.log('error to mkdir direct', err);
              });
            });
          }
        }

        if(req.url.includes('api')) return 
        if(req.url.includes('single')) return 

        const fileURL =  'index_' + req.url.split('/')[1] + '.html'
        const dirURL = path.resolve(__dirname, './resources/', fileURL);

        if(req.url.includes('/post-edit')){
          const notFOUND = path.resolve(__dirname, './public/', 'notfound.html')

          if(fs.existsSync(notFOUND)){
            const html = await fs.readFileSync(notFOUND, 'utf-8');
            return res.status(202).send(html);
          }
        }

        if(fs.existsSync(dirURL)){
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
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
            ],
            include: /\.module\.css$/,
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /\.module\.css$/,
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
