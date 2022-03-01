import Store from './src/lib/Store.js';
import app from './src/views/App.js'
import Router from './src/lib/Router.js';
import viewRouter from './src/views/router.js';

export function ssr_converter (context) {
  return new Promise(async (resolve, reject) => {

    let { url, state, index } = context;
    
    const store = new Store();
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
    url = state.data.length === 0 ? '/not-found' : url 
    router.setPathCur(url, true);
    viewRouter.setIndex(Number(index))
    store.initState(state, true);
    app.setState(state);

    let ssr_html= router.serverRender();
   
    if(ssr_html) resolve( ssr_html ); 
    else{ 
      router.setPathCur('/not-found', true);
      ssr_html = router.serverRender();

      if(ssr_html) resolve(ssr_html);
      else reject( new Error('SSR error') );
    }
  })

}
