import App from "./components/App"
import store from "./store"

const app = new App(document.querySelector('#root'))
store.subscribe(app)
store.setEvent()
store.setState(globalThis.state, true)
// remove globalthis script on head
