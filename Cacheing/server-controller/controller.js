import { getData, getTotalData } from '../src/db/data.js';
import store from '../src/core/Store.js'
let totalData = store.state.data;

const controller = {
  
  // every get request ( w/o minor user-interaction, event) - SSR
  // i.e : refresh and first visit to default url
  staticRender : (req, res) => {
    // initialize state and subscribe observers 
    store.initializeState({ ...store.state })
    res.send(store.initRender())
  },
  findByIndex : (req, res) =>{

    let { size, group } = req.query
    if(!size || !group) return res.status(400).send("Bad Request")

    const totalData = getTotalData()
    let start = Number(group) * Number(size) * 10
    let end = start + 200 
    end = end > totalData.length ? totalData.length : end
    
    console.log(size, group)
    let filtered = getData(start, end)
    let newState = {
      data : filtered,
      size : Number(size),
      group : Number(group),
      page : Number(group) * 10 + 1
    }
    store.state = { ...store.state, ...newState }
    console.log(store.state)
    res.json(store.state)
    

  },
  
  // To update the cache and state data - SSR
  getData : (req, res) => {
    const { search, order, total } = req.query

    // filter by search keyword   
    let filtered = search === "" 
      ? totalData.slice() 
      : totalData.filter(ele => {
          let bool = ele.name.includes(search) 
            || ele.content.includes(search)
            || ele.writer.includes(search)   
        })

    // filter by order
    filtered = order === 'asc'
        ? filtered 
        : filtered.reverse()
    
    // filter by name <-- needs here 
    
    // update server-side state & response data
    store.state = { ...store.state, ...{ data : filtered } }
    res.json({ data : filtered })
  },

  // minor changed state - CSR 
  // and sync the store, state with client  
  syncHdrate : (req, res) => {
    store.hydrate(req.body);
    res.status(204).end()
  },


}

export default controller