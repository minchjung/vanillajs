import observerble  from './Publisher.js'

export default class Store {
  state
  constructor(state){
    this.state = observerble(state)
  }
  setState(newState){
    Object.entries(newState).forEach(([key, val]) => {
      if(this.state[key]) this.state[key] = val
    })
    console.log(this.state)
  }
}

