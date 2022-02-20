import Component from "../../core/Component.js";
import store from "../../store.js";

export class PostList extends Component{

  constructor(root){
    super()
    if(root) this.el = root.querySelector('#postlist')
    this.boundHandler = this.eventHandler.bind(this);
  }

  setEvent(){
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener('click', this.boundHandler)
  }

  eventHandler({ target }){
    const { action } = target.dataset
    if( action === 'writer' ){
      store.setState({ name : target.innerText , filter : "", page : 1})
    } 
    if( action === 'title' ){
      const url = window.origin + "/post-single"
      store.setPath('/post-single');
      history.pushState(target.dataset.index, "", url)
    }
    // console.log(target.innerText)
  }

  template(){
    
    const items = store.state.data
    return `
    <div id='postlist'>
        ${ items.length === 0 ? "" : 
          items.map( (item, idx) => `
          <ul data-index=${item.idx}>  
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
    const renderHtml = this.template();
    if(this.el){
      this.el.innerHTML = renderHtml;
      requestAnimationFrame(()=> this.setEvent())
    } 
    return renderHtml
  }  

}