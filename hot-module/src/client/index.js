import store from '../store.js'


let oldDom; 
// after rendered 
const init = () => {
  
  // set root-element 
  store.setElementAll(document.querySelector('#root'))

  // set store state , no check cach for first render
  store.setState(globalThis.state, false)



  // get cached data from server and set on localStorage
  fetch('/api/cache', { method : 'get' })
    .then(result => result.json())
    .then(result =>{
      // console.log(result);
      localStorage.removeItem('cached');
      localStorage.setItem('cached', JSON.stringify(result));

    })

  // set current dom structure
  oldDom = store.html
  store.html ="";

}

init()



