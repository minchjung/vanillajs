import Router from './lib/Router.js';
import app from './components/App.js'

export const createNewRouter = ({ root }) => {
  let router = new Router(root);
  
  router.subscribe(app)
  router.setRoutes( 
    [
      { path : '/',
        comPosition : 0 
      },
      { path : '/post-single',
        comPosition : 1
      },
    ] 
  )
  return router 
}
