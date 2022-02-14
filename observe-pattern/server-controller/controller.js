import totalData from '../db/data.js'
import { serverRenderer } from '../src/serverRender.js'

const initialState = {
  state : {
    data : [],
    total : 537,
    cur : 1,
    size : 5,
    startIdx : 1, 
  }
}


const controller = {
  staticRender : (req, res) => {
    initialState.state.data = totalData.slice(0,5)
    console.log(initialState)
    res.send(serverRenderer(initialState.state))
  },

  findByPage : (req, res) => {
    res.send("page set is works")
    // res.json(totalData)
  }
}

export default controller