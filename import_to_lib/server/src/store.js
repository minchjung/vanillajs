
const initialState = {
  data : [],
  page : 1,
  size : 5, 
  order : 'dsc',
  filter : '',
  name : '',
  total : 1,
}

const store = {
  state : initialState, 

  setState(newState){
    this.state = { ...this.state, ...newState }
  }
}

module.exports = store;
