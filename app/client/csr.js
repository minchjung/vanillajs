import { actionHandler } from './src/action.js'
import Store from './src/lib/Store.js';
import { totData } from './src/lib/Data.js';
import app from './src/components/App.js'
import Router from './src/lib/Router.js';

const initialState = {
  data : totData.slice().reverse().slice(0,5),
  page : 1,
  size : 5, 
  order : 'dsc',
  filter : '',
  name : '',
  total : totData.length,
}

const state = globalThis.state || initialState; 
const store = new Store();
store.subscribe(app);

let temp ;
Object.entries(actionHandler.cacheHandler)
  .forEach(([ handler, func ]) => {
    temp = func
    store.cacheHandler[handler] = temp.bind(store);
})

store.initState(state);
store.cacheHandler.setCache();


const router = new Router();
router.subscribe(app);
router.setRoutes( 
  [
    { path : '/',
      comPosition : 0 
    },
    { path : '/post-single',
      comPosition : 1
    },
    { path : '/post-edit',
      comPosition : 2
    },
  ] 
)

router.setRoot(document.querySelector('#root') );
// router.setPathCur(location.pathname);


// console.log(store, router)
export { store, router }