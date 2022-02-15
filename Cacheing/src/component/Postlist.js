import Component from './Component.js'
import store from '../core/Store.js'

export class PostList extends Component{

  setElement(root){
    this.el = root.querySelector('#postlist')
    this.setEvent()
  }

  setEvent(){
    const el = this.el
    el.addEventListener('click', this.eventHandler)
  }


  eventHandler({ target }){
  }

  template(){
    const { total, page, size, group, data } = store.state
    const startIdx = (page - 1)*size
    const endIdx = startIdx + size 
    const items = data.slice(startIdx, endIdx)
    
    if(!items) { 
      console.log("Error state set null ")
      return 
    }
    return `
    <div data-component='postlist' id='postlist'>
        ${ items.map( (item, idx) => `
          <ul id=item-${idx}>${item.id}
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
    this.el.innerHTML = this.template()
  }  

}