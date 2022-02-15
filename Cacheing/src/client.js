import store from "./core/Store.js"

store.initializeState(globalThis.state)
window.localStorage.setItem('id', globalThis.state.id)
store.initElement(document.querySelector('#root'))
// console.log(window.localStorage.getItem('id'))
console.log(store)