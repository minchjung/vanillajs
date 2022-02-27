import Store from './lib/Store.js';
import { totData } from './lib/Data.js';
import app from './components/App.js'
const initialState = {
  data : totData.slice().reverse().slice(0,5),
  page : 1,
  size : 5, 
  order : 'dsc',
  filter : '',
  name : '',
  total : totData.length,
}


export const createNewStore = ({ state }) => {
  
  state = state || initialState; 
  const store = new Store();

  store.initState(state);
  store.subscribe(app);

  return store
}