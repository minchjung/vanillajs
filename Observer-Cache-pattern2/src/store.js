import Store from "./core/Store.js";
import { App } from "./component/App.js";

const initialState = {
  data : [],
  page : 1,
  size : 5, 
  order : 'dsc',
  filter : '',
  name : '',
  total : 1,
}

const store = new Store(initialState);
store.subscribe(new App())

export default store