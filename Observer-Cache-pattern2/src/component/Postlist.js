import Component from './Component.js'
import store from "../store.js";

export class PostList extends Component{

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setElement(root){
    this.el = root.querySelector('#postlist')
    this.setEvent()
  }

  setEvent(){
    this.el.removeEventListener("change", this.boundHandler)
    this.el.addEventListener('change', this.boundHandler)
  }
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
  eventHandler({ target }){
    store.setState(store.state)
  }

  template(){
    
    const items = store.state.data
    return `
    <div id='postlist'>
        ${ items.map( (item, idx) => `
          <ul data-index=${item.index}>  
            <li id= ${item.id}>${item.id}</li>
            <li data-action='title'>${item.title}</li>
            <li data-action='writer'>${item.writer}</li>
            <li>${item.date}</li>
          </ul>`)
          .join("")
        }
      </div>`
  }

  render(){
    return this.template()
  }  

}