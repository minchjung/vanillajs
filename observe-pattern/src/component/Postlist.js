import Component from './Component.js'
import store from '../store.js'

export class PostList extends Component{

  template(){
    const storeData = store.state.data
    const items = storeData.length === 0 
      ? this.state.data
      : storeData
    return `
      <div id=postlist>
        ${ items.map( (item, idx) => `
          <ul id=item-${idx}>${item.id}
            <li id= ${item.id}>${item.id}</li>
            <li data-action='title'>${item.title}</li>
            <li data-action='writer'>${item.writer}</li>
            <li>${item.date}</li>
          </ul>`).join("")
        }
      </div>`
  }
}

