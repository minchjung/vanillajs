import createNewStore from './store.js';
import createNewRouter from './router.js';
import { App } from './components/App.js';
import {actionHandler} from './action.js'
// dotenv.config();
// console.log(process.env.SERVER)
let state = globalThis.state || null; 

const app = new App({ name :'root' });
const store = createNewStore({ app, state });
const router = createNewRouter({ app });
store.subscribe(app);

let temp ;
Object.entries(actionHandler.cacheHandler)
  .forEach(([ handler, func ]) => {
    temp = func
    store.cacheHandler[handler] = temp.bind(store);
})

// console.log(store)
export { store, router }