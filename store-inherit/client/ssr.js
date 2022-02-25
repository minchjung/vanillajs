import  app  from "./src/components/App.js";
import createNewRouter from "./src/router.js";
import createNewStore from "./src/store.js";

export function ssr_converter (context) {
  return new Promise(async (resolve, reject) => {

    const { url, state } = context;
    const store = createNewStore({ state, app });
    const router = createNewRouter({ app });
   
    const ssr_html= router.serverRender();
   
    if(ssr_html) resolve( ssr_html ); 
    else reject( new Error('SSR error') )
  })

}
