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
  const store = Store;

  store.initState(state);
  store.subscribe(app);

  return store
}
export default createNewStore