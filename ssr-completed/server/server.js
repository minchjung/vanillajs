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
  if(!req.query) return res.status(400).end();

  store.setState(updateStateByQueryExecutor(req.query));
  const { data, total } = store.state

  res.json({ id : getPathURL(store.state), data, total })
};

const updateState = async (req, res)=> {
  if( !req.body ) return res.status(400).end(); 
  store.setState(req.body)

  return res.status(203).end();
}


server.get('/', async (req, res) => {
  store.setState(initialState) 
  const redirectTo = `/page?` + getPathURL(store.state);
 
  return res.redirect(redirectTo)  ;
})

server.get('/page', async (req, res) => {
  
  const filePath = 'page?' + getPathURL(req.query)
  const fileURL = path.resolve(__dirname, 'index_'+ filePath +'.html');

    if(!fs.existsSync(fileURL)){
      const state = store.state
      let html = await getStringHtml({ url : '/', state })
      await fs.writeFileSync(fileURL, html);

      return res.redirect('/' + filePath)
    }
    else{
      let fileHTML = await fs.readFileSync(fileURL, 'utf-8');
      // console.log('file exisitst and fileURL[', fileURL, '-----------------------')
      
      return res.send(fileHTML)
    }

})

server.get('/api/cache', updateCache);
server.put('/api/state', updateState);


server.listen(PORT, ()=> {
  console.log("server listning by Port= "+PORT)
})
