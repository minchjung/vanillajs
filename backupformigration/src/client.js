import App from "./App.js"
import store from "./store"
import router from "./router.js";

const app = new App();

store.subscribe(app);
router.subscribe(app)

store.setState(globalThis.state, true)
store.setEvent(router.$root)
console.log(router)
// remove globalthis script on head
