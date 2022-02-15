import store from "./core/Store.js"

store.initializeState(globalThis.state)
store.initElement(document.querySelector('#root'))