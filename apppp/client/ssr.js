import { App } from "./src/components/App.js";
import createNewRouter from "./src/router.js";
import createNewStore from "./src/lib/store.js";

export default (context) => {

  const { url, state } = context;
  const store = createNewStore(state);
  const router = createNewRouter(url);

  const app = new App();
  store.subscribe(app);
  router.subscribe(app);

  return router.templateRender();
}

