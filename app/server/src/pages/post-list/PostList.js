import Component from "../../core/Component.js";
import router from "../../router.js";
import store from "../../store.js";

export class PostList extends Component{

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setEvent(root){
    this.el = router.$root.querySelector('#postlist')
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener('click', this.boundHandler)
  }

  eventHandler({ target }){
    const { action } = target.dataset
    
    if( action === 'writer' ){
      store.setState({ name : target.innerText , filter : "", page : 1})
    } 
    if( action === 'title' ){
      const { index } = target.parentElement.dataset
      const url = window.origin + "/post-single" + `?index=${index}`
      router.setRouteState(index)
      router.setPathCur('/post-single');
      history.pushState(state , "", url)
    }
    // console.log(target.innerText)
  }

  template(){
    
    const items = store.state.data
    return `
    <div id='postlist'>
        ${ items.length === 0 ? "" : 
          items.map( (item, idx) => `
          <ul data-index=${idx}>  
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