const express = require('express');
const server = express(); 

const ssrService =require('./src/ssr.service.js');
const store = require('./src/store.js');
const updateStateByQueryExecutor = require('./src/executor.js')

const PORT = 3001;
// server.use(express.static(path.resolve(__dirname, 'public')))
server.get('/', async (req, res) => {

  const state = updateStateByQueryExecutor(store.state);
  store.setState(state);

  const result = ssrService({url : '/', state })
  console.log(result)
  res.send("yoasdfu aasdfasdok")  
})
server.listen(PORT, ()=> {
  console.log("server listning by Port= "+PORT)
})