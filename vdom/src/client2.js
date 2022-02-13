import { App, ComponentRenderer } from './components/App.js';
import { store } from './store.js'

const initializer = () => {
  store.setState(globalThis.state)
  store.register(ComponentRenderer)
  store.setRoot(document.querySelector('#root'))
  console.log("init once")
  App()
}

initializer()
