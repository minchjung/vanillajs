import Store from './lib/Store.js';
import { totData } from './lib/Data.js';

const initialState = {
  data : totData.slice().reverse(),
  page : 1,
  size : 5, 
  order : 'dsc',
  filter : '',
  name : '',
  total : 1,
}


const createNewStore = ({ state, app }) => {
  
  state = state || initialState; 
  return new Store({ 
    state, app
  })
}
export default createNewStore