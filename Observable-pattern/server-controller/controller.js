import store from '../src/core/Store.js'
let totalData = store.state.data;

const controller = {
  staticRender : (req, res) => {
    store.initializeState({ ...store.state, data : totalData.slice(0,5)})
    res.send(store.initRender())
  },

  findByPage : (req, res) => {
    const { size, page } = req.query
    console.log(size, page)
    const start = (Number(page)-1)* Number(size)
    const end = start + Number(size)
    
    console.log(start, end)
    store.initializeState({ ...store.state, 
      data : totalData.slice(start, end), 
      size :  Number(size), 
      cur : Number(page)
    })
    console.log(store)
    res.json(store.state)
  }
}

export default controller