import App from "./App.js"
import store from "./store"

const root = document.querySelector('#root')

store.subscribe(new App(root));
store.setEvent();
store.setState(globalThis.state, true)
// remove globalthis script on head
// console.log(store.observers)

