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