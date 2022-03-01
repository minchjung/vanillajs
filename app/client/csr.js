import { actionHandler } from './src/action.js'
import Store from './src/lib/Store.js';
import app from './src/components/App.js'
import Router from './src/lib/Router.js';
import styles from './styles.css'


const state = globalThis.state 
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
    { 
      path : '/nout-found',
      comPosition : 3
    }
  ] 
)

router.setPathCur(location.pathname, true);
router.setIndex(location.search.split('=')[1])
router.setRoot(document.querySelector('#root') );

export { store, router }