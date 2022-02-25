require('global-jsdom/register')
const express = require('express');
const cors = require('cors')

const server = express(); 
const path = require('path')
const PORT = 3001;

const store = require('./src/store.js');
const updateStateByQueryExecutor = require('./src/executor.js')
const getStringHtml = require('./src/ssr.service.js');

const updateCache = (req, res) => {
  let state = req.query;
  // console.log(state)
  store.state= updateStateByQueryExecutor(state);
  const { filter, name, order, data, total, page, size } = store.state
  const id = `filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}`

  res.json({ 
    id,
    data,
    total
   })
};

const updateState = (req, res)=> {
    console.log(req.body)
  if( !req.body ) return res.status(400).end(); 
  
  store.setState(req.body)
  return res.status(204).end()
}
// server.use(cors());
server.options('*', cors());
server.use(express.json())
server.use(express.static(path.resolve(__dirname, 'public')));

server.get('/', async (req, res) => {
  console.log(store.state)
  const url = '/'
  const state = updateStateByQueryExecutor(store.state);
  store.setState(state);

  const html = await getStringHtml({ url, state })
  // console.log("sereroiajpsfjpaowejf", html)
  res.send(html)  
})
server.get('/api/cache', updateCache);
server.put('/api/state', updateState);

server.listen(PORT, ()=> {
  console.log("server listning by Port= "+PORT)
})
