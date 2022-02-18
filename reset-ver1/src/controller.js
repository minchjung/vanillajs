import template from './template.js';
import { queryExecutor } from './db/data.js';
import store from './store.js'
let cacheData ;

const controller = {
  
  getStaticRender : (req, res) => {
    const { cache } = req.query
    // Have params from server local 
    // store-state (synced all with client store-state)
    let { size, order, filter, name, page } = store.state;
    size = Number(size); 
    page = Number(page);

    // Select data (by search keyword, writer-name, order)
    let filtered = queryExecutor.filterByKeyWord(filter);
    filtered = queryExecutor.filterByName(name, filtered);
    // set range on view and cached data
    let [ from, to ] = queryExecutor.setRange(page, size, 0, filtered.length)
    let [ _from, _to ] = queryExecutor.setRange(page, size, size*3, filtered.length)

    // set order and index on data
    let data = queryExecutor.getRangedData(from, to, order, filtered.slice());
    let cached = queryExecutor.getRangedData(_from, _to, order, filtered.slice());

    // inital set for store-state & SSR
    store.initRender( { data, total : filtered.length } );
    const inithtml = store.html

    // console.log(store)
    store.setHtml("")
    const staticView = template(inithtml, store.state)

    // Set cached data on Server 
    cacheData = {
      _id : filter + name + order, 
      _from, 
      _to,
      data : cached
    } 

    console.log(":static render !!")
    // console.log(store.state.data)
    return !cache ? res.send(staticView) : res.json(store.state)
  },

  // client request to get cachedata when it renders
  syncCache : (req, res) => {
    console.log("cached")
    return res.json(cacheData)
  },

  // client request to set their state 
  syncState : (req, res) => {
    store.hydrate(req.body)
    return res.status(204).end()
  },

}
export default controller