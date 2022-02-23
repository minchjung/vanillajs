// import fs from 'fs'
// import path from 'path';
// import createNewStore from "./src/store.js";
// import App from './src/components/index.js'
// const app = new App();
// const store = createNewStore();
// store.subscribe(app);
// router.subscribe(app);
// const template = router.templateRender(); 


// const writeHTML = async () => {
  
  //   return await fs.writeFile(path.resolve(__dirname, 'template.html'), template, (err)=>{
    //     if(err) console.log(err);
    //     else console.log("work out asdfsdadfwell,tooo")
    //   })
    // }
    
    // writeHTML();
// import * as Components from './src/components/index.js'
// import createNewStore from './src/store.js';

// export const serverSide = () => {
//   const app = new Components.App()
//   const store = createNewStore();
//   store.subscribe(app);

//   return { store, app }
// }

import { App } from "./src/components/App.js";
import createNewRouter from "./src/router.js";
import createNewStore from "./src/store.js";

export default (context) => {

  const { url, state } = context;
  const store = createNewStore(state);
  const router = createNewRouter(url);

  const app = new App();
  store.subscribe(app);
  router.subscribe(app);

  return router.templateRender();
}

