import express from "express";
import path from 'path';
import fs from 'fs';
import App from './App.js';
import store from "./store";
import { updateStateByQueryExecutor } from "./db/data.js";

const app = express(); 
const router = express.Router();
const PORT = 4000;

const serverRenderer = (req, res, next) =>{
  // initialize static html from build index.html
  let html = fs.readFileSync(
    path.resolve('./build/index.html'), 'utf-8',
  )
  // initialize store and components on server side 
  const app = new App();
  store.subscribe(app);

  // update state from client by hydrated Func 
  store.state = updateStateByQueryExecutor(store.state)
  
  // String - Static Rendering 
  html = html.replace(`<div id="root"></div>`, app.render())
  html = html.replace(`<script>window</script>`, 
    `<script>window.state=${JSON.stringify(store.state)}</script>`)

  res.send(html) 
}

const updateCacheByGet = (req, res) => {
  let state = req.query;
  // console.log(req.query)

  // update state from request 
  store.state= updateStateByQueryExecutor(state);
  const { filter, name, order, data, total } = store.state

  // response cache data
  res.json({ 
    id : store.getCacheId(),
    data,
    total
   })
}

router.use('^/$', serverRenderer);
router.use(express.static("./build"))
router.use('/api/cache', updateCacheByGet)

app.use(express.json());
app.use(router)

app.get('/favicon.icon', (req,res)=> res.status(204).end())
app.put('/api/state', (req, res)=> {
  // console.log(req.body)
  if( !req.body ) return res.status(400).end(); 

  store.hydrate(req.body)
  return res.status(204).end()
})


app.listen(PORT, ()=>{
  console.log(`SERVER ON : http://localhost:${PORT}`)
})


export default app;