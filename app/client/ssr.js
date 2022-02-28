import Store from './src/lib/Store.js';
import app from './src/views/App.js'
import Router from './src/lib/Router.js';

export function ssr_converter (context) {
  return new Promise(async (resolve, reject) => {

    const { url, state } = context;
    
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
      ] 
    )

    router.setPathCur(url);
    store.initState(state, true);
    app.setState(state);

    const ssr_html= router.serverRender();
   
    if(ssr_html) resolve( ssr_html ); 
    else reject( new Error('SSR error') )
  })

}
