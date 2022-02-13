import { store } from "./store.js";
import { App, ComponentRenderer } from "./components/App.js";

let $root; 
let vdom = { 
  vdom : null,
  componentId : []
}

const initializer = () => {
  setGlobal()
  vdom.componentId.map(setEvent)
}

const setGlobal = () => {
  store.setState(globalThis.state)
  $root = document.querySelector('#root');
  store.setRoot($root)
  console.log(store)
  vdom.vdom = $root.cloneNode(true)
  vdom.componentId = Object.values($root.childNodes) 
    .filter(node => node.nodeName !== '#text')
    .map(node => '#'+node.id.toLowerCase()) 
}

const setEvent = (componentId) => {
  addEvent($root.querySelector(componentId)) 
}

const addEvent = (node) => {
  node.addEventListener('click', ({ target }) => {
    const { action } = target.dataset
    switch( action ){
      case 'searchBtn': filterHandler()
        break;
      case 'refAll': pageInitHandler()
        break;
      case 'refSort': listInitHandler()
        break;
      case 'writer': listNameHandler(target)
        break;
      default : break;
    }
  })
  
  if(node.id === vdom.componentId[vdom.componentId.length -1]) return 
  
  node.addEventListener('change', ({ target }) => {
    const { action } = target.dataset
    if(action === 'order'){
      const factor = target.value === 'dsc' ? -1 : 1
      listOrderHandler(factor)
    } 
    if(action === 'page') 
      pageOrderHandler()

    if(action === 'searchInput') 
      searchInputHandler(target)
  })
}

const switchComponent = (removeTag, insertTag, position, switchAll=false) => {
  const key =removeTag.slice(1).toLowerCase()
  $root.querySelector(removeTag).remove()
  $root.querySelector(insertTag)
    .insertAdjacentHTML(position, ComponentRenderer[key]())
  setEvent(removeTag)
}

const listInitHandler = () => {
  store.setState({ ...store.state })
  switchComponent("#postlist", "#header", "afterend")
}

const listOrderHandler = (factor) => {
  console.log("order event")
  const oldState = [...store.state.data]
  oldState.sort( (eleA, eleB) => 
    new Date(eleA.date).getTime() * factor 
    - new Date(eleB.date).getTime() * factor 
  )
  store.setState({ demoData : oldState });
  switchComponent("#postlist", "#header", "afterend")
}

const listNameHandler = (target) => {
  const oldState = [ ...store.state.data ]
  store.checkApi.isOkCache = false
  store.setState({ 
    demoData : oldState.filter( ele => ele.writer === target.innerHTML) 
  })
  $root.innerHTML = App()
  vdom.componentId.map(setEvent)
}

const pageInitHandler = () => {
  store.setState({ ...globalThis.state })
  $root.innerHTML = App()
  vdom.componentId.map(setEvent)
}
const filterHandler =() => {}
const pageOrderHandler = () => {}
const searchInputHandler = () => {}

initializer()