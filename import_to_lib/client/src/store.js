import Store from './core/Store.js'
const createNewStore = (state) => {
  return new Store(state)
  
}
export default createNewStore