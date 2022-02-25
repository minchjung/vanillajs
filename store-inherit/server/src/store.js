const { default: Store } = require("../../client/src/lib/Store");

class serverStore{

  state; 
  constructor(state){
    this.state = state; 
  };

  setState(newState){
    this.state = { ...this.state , ...newState}
  };
}



const initialState = {
  data : [],
  page : 1,
  size : 5, 
  order : 'dsc',
  filter : '',
  name : '',
  total : 1,
}

const store = new serverStore(initialState);
module.exports = store; 


// const store = {
//   state : initialState, 

//   setState(newState){
//     this.state = { ...this.state, ...newState }
//   }
  
// }

module.exports = store;
