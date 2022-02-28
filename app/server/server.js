require('global-jsdom/register')
const express = require('express');
const cors = require('cors')
const fs =require('fs');
const path = require('path')

const server = express(); 
const PORT = 3001;

const { updateStateByQueryExecutor, getPathURL} = require('./src/executor.js')
const getStringHtml = require('./src/ssr.service.js');
const store = require('./src/store.js');
const { initialState } = require('./src/Data')

server.options('*', cors());
server.use(express.json())
server.use(express.static(path.resolve(__dirname, 'public')));

const updateCache = (req, res) => {
  console.log('cache update comming to here', req.query)
  if(!req.query) return res.status(400).end();

  store.setState(updateStateByQueryExecutor(req.query));
  const { data, total } = store.state

  res.json({ id : getPathURL(store.state), data, total })
};

const updateState = async (req, res)=> {
  if( !req.body ) return res.status(400).end(); 
  store.setState(req.body)
  console.log('comming to /api/state')
  return res.status(203).end();
}


server.get('/', async (req, res) => {
  console.log(req.query)
  console.log('comming to basic path')
  store.setState(initialState) 
  const redirectTo = `/page?` + getPathURL(store.state);
 
  return res.redirect(redirectTo)  ;
})

server.get('/page', async (req, res) => {
  console.log('comming to server page not passed by bypass let me see what ')
  const filePath = 'page?' + getPathURL(req.query)
  const fileURL = path.resolve(__dirname,'../../client/resources' , 'index_'+ filePath +'.html');
  let html ;
    if(!fs.existsSync(fileURL)){
      html = await getStringHtml({ url : '/', state : store.state })
      await fs.writeFileSync(fileURL, html);
      console.log('file not exists', fileURL)
    }
    else{
      html = await fs.readFileSync(fileURL, 'utf-8');
      console.log('fileexists', fileURL)
    }

  return res.send(html)
})

server.get('/post-single', async (req, res) => {
  console.log(req.url)
  console.log(req.query);
  console.log(store.state)
  
  const result = await getStringHtml({ url : '/post-single', state : store.state } )
  console.log(result)
  res.send(result)
})

server.get('/api/cache', updateCache);
server.put('/api/state', updateState);


server.listen(PORT, ()=> {
  console.log("server listning by Port= "+PORT)
})
