import Router from './lib/Router.js';
import { PostListPage } from './components/PostListPage.js';
import { PostSinglePage } from './components/PostSingle.js';

const createNewRouter = ({ base, routes, app}) => {
  
  base = base || 'http://localhost:3001';
  routes = routes || [
    { path : '/',
      component : PostListPage
    },
    { path : '/post-single',
      component : PostSinglePage
    },
  ]  
  const router = new Router({ 
    base,routes, app 
  });
  return router 
}
export default createNewRouter;