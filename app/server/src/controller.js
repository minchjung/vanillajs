import App from './App.js';
import fs from 'fs';
import path from 'path';
import { updateStateByQueryExecutor } from './db/data.js';
import store from "./store";
import router from './router.js';
import axios from 'axios';
const controller = {

   serverRenderer : async (req, res) =>{
    //  if(req.url === '/client.js') return res.status(203).end();

    // initialize static html from build index.html
    let html = await fs.readFileSync(
      path.resolve(__dirname, 'index.html'), 'utf-8',
    )
    // file upload error 
    if( !html ) res.status(500),end();
    // initialize server static rendering 
    const app = new App();
    const pathname = req.url || '/'
    
    store.subscribe(app);
    router.subscribe(app);
    // update state with new DBdata - state condition is synced with clients
    store.state = updateStateByQueryExecutor(store.state)
    
    // String - Static Rendering 
    html = html.replace(`<div id="root"></div>`, router.setPathCur(pathname))
    html = html.replace(`<script>window</script>`, 
      `<script>window.state=${JSON.stringify(store.state)}</script>`)

    res.send(html) 
  },

  // update cache data
  updateCache : (req, res) => {
    let state = req.query;
    // console.log(req.query)
  
    // update server side state, too  
    store.state= updateStateByQueryExecutor(state);
    const { filter, name, order, data, total } = store.state
  
    // response cache data
    res.json({ 
      id : store.getCacheId(),
      data,
      total
     })
  },

  // sync state with client one  
  updateState : (req, res)=> {
    // console.log(req.body)
    if( !req.body ) return res.status(400).end(); 
  
    store.hydrate(req.body)
    return res.status(204).end()
  }
  
}
export default controller