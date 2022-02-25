import Router from './lib/Router.js';
import { PostListPage } from './components/PostListPage.js';
import { PostSinglePage } from './components/PostSingle.js';

const createNewRouter = ({ app }) => {
  let router = Router;
  
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

export default createNewRouter;