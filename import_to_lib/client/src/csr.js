import createNewStore from './store.js';
import createNewRouter from './router.js';
import { App } from './components/App.js';
import Mylibrary from './core/ReactVue.js';

const store = createNewStore();
const router = createNewRouter();
const app = new App();
store.subscribe(app);
router.subscribe(app);
// // console.log(router.templateRender())

new Mylibrary(app, store, router, false);

// export { store, app, router }
