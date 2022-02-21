import Store from "./core/Store.js";
import { dbTotalData } from './db/data.js'

const initialState = {
  data : dbTotalData.slice().reverse().slice(0,5),
  page : 1,
  size : 5, 
  order : 'dsc',
  filter : '',
  name : '',
  total : 1,
}

const store = new Store(initialState)
export default store