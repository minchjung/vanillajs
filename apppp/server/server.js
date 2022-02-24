const express = require('express');
const cors = require('cors')
const server = express(); 
// const ssrService =require('./src/ssr.service.js');
const store = require('./src/store.js');
const updateStateByQueryExecutor = require('./src/executor.js')
const PORT = 3001;

const updateCache = (req, res) => {
  let state = req.query;
  console.log(state)
  store.state= updateStateByQueryExecutor(state);
  const { filter, name, order, data, total, page, size } = store.state
  const id = `filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}`

  console.log('stateawteaet=', store.state)
  // response cache data
  res.json({ 
    id,
    data,
    total
   })
};

  // sync state with client one  
const updateState = (req, res)=> {
    // console.log(req.body)
  if( !req.body ) return res.status(400).end(); 
  
  store.setState(req.body)
  return res.status(204).end()
}
  

// server.use(cors());
server.options('*', cors())
// server.use(express.static(path.resolve(__dirname, 'public')))
server.get('/', async (req, res) => {

  const state = updateStateByQueryExecutor(store.state);
  store.setState(state);

  // const result = ssrService({url : '/', state })
  // console.log(result)
  res.send("yoasdfu aasdfasdok")  
})

server.get('/api/cache', updateCache)

server.listen(PORT, ()=> {
  console.log("server listning by Port= "+PORT)
})

