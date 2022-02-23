import Router from './core/Router.js'

const createNewRouter = (url) => {
  const router = new Router(url);
  return router 
}
export default createNewRouter; 