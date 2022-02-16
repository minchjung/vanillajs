import store from './store.js'

let oldDom; 
console.log("asdf")
// after rendered 
const init = () => {
  // set root-element 
  store.setRoot(document.querySelector('#root'))

  // set store state , no check cach for first render
  store.setState(globalThis.state, false)

  // // get cached data from server and set on localStorage
  // fetch('/api/cache', { method : 'get' })
  //   .then(result => result.json())
  //   .then(result =>{
  //     // console.log(result);
  //     localStorage.removeItem('cached');
  //     localStorage.setItem('cached', JSON.stringify(result));

  //   })

  // set current dom structure
  oldDom = store.html
  store.html ="";

  // console.log(store.html)
}

init()

// Store {observers: Array(1), state: {…}, html: ''}
// html: ""
// observers: [App]
// state:
// data: Array(5)
// 0: {id: 100, title: 'title100', writer: 'name100', content: 'content100', date: '2022-1-100', …}
// 1: {id: 99, title: 'title99', writer: 'name99', content: 'content99', date: '2022-1-99', …}
// 2: {id: 98, title: 'title98', writer: 'name98', content: 'content98', date: '2022-1-98', …}
// 3: {id: 97, title: 'title97', writer: 'name97', content: 'content97', date: '2022-1-97', …}
// 4: {id: 96, title: 'title96', writer: 'name96', content: 'content96', date: '2022-1-96', …}
// length: 5
// [[Prototype]]: Array(0)
// filter: ""
// name: ""
// order: "dsc"
// page: 1
// size: 5
// total: 100
// [[Prototype]]: Object

// cached : 
// {_id: 'dsc', _from: 0, _to: 20, data: Array(20)}
// data: Array(20)
// 0: {id: 100, title: 'title100', writer: 'name100', content: 'content100', date: '2022-1-100', …}
// 1: {id: 99, title: 'title99', writer: 'name99', content: 'content99', date: '2022-1-99', …}
// 2: {id: 98, title: 'title98', writer: 'name98', content: 'content98', date: '2022-1-98', …}
// 3: {id: 97, title: 'title97', writer: 'name97', content: 'content97', date: '2022-1-97', …}
// 4: {id: 96, title: 'title96', writer: 'name96', content: 'content96', date: '2022-1-96', …}
// 5: {id: 95, title: 'title95', writer: 'name95', content: 'content95', date: '2022-1-95', …}
// 6: {id: 94, title: 'title94', writer: 'name94', content: 'content94', date: '2022-1-94', …}
// 7: {id: 93, title: 'title93', writer: 'name93', content: 'content93', date: '2022-1-93', …}
// 8: {id: 92, title: 'title92', writer: 'name92', content: 'content92', date: '2022-1-92', …}
// 9: {id: 91, title: 'title91', writer: 'name91', content: 'content91', date: '2022-1-91', …}
// 10: {id: 90, title: 'title90', writer: 'name90', content: 'content90', date: '2022-1-90', …}
// 11: {id: 89, title: 'title89', writer: 'name89', content: 'content89', date: '2022-1-89', …}
// 12: {id: 88, title: 'title88', writer: 'name88', content: 'content88', date: '2022-1-88', …}
// 13: {id: 87, title: 'title87', writer: 'name87', content: 'content87', date: '2022-1-87', …}
// 14: {id: 86, title: 'title86', writer: 'name86', content: 'content86', date: '2022-1-86', …}
// 15: {id: 85, title: 'title85', writer: 'name85', content: 'content85', date: '2022-1-85', …}
// 16: {id: 84, title: 'title84', writer: 'name84', content: 'content84', date: '2022-1-84', …}
// 17: {id: 83, title: 'title83', writer: 'name83', content: 'content83', date: '2022-1-83', …}
// 18: {id: 82, title: 'title82', writer: 'name82', content: 'content82', date: '2022-1-82', …}
// 19: {id: 81, title: 'title81', writer: 'name81', content: 'content81', date: '2022-1-81', …}
// length: 20
// [[Prototype]]: Array(0)
// _from: 0
// _id: "dsc"
// _to: 20