import Component from '../core/Component.js';
import { router, store } from "../csr.js";


export class Postlist extends Component{

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

export class PostButton extends Component{

  constructor(){
    super()
  }

  setEvent(root){
    this.el = router.$root.querySelector("#postbutton")
    this.el.removeEventListener("click", this.eventHandler)
    this.el.addEventListener("click", this.eventHandler)
  }
  
  eventHandler({target}){
    
    // const url = location.origin + '/post-edit';
    router.setPathCur('/post-edit');
    
    // history.pushState(store.state, "글작성", url)
  }

  template(){
    return `
      <div id=postbutton>
        <button>작성</button>
      </div>
    `
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


export class Pagination extends Component{

  page; group

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setEvent(root){
    this.el = router.$root.querySelector("#pagination")
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener("click", this.boundHandler)
  }
  
  eventHandler({target}){
    const { action } = target.dataset ;
    const { page } = store.state
    if(action === 'more'){
      store.setState({ page : Number(page) + 1 })
    }
    if(action === 'less'){
      store.setState({ page : Number(page) -1 })
    }
  }

  template(){
    const { page, size, total, data } = store.state;
    const less = Number(page) > 1;
    const more = Number(size)*Number(page) < Number(total) ;
    // console.log(total , more)

    return `
      <div id=pagination>
      ${ Number(total) === 0 ? `<span class="none-display">"게시글이 존재 하지 않습니다."</span>` : ""}
      ${ less ? `<button data-action="less">이전</button>` : "" }
      ${ more ? `<button data-action="more">더보기</button>` : "" }
      ${ Number(total) && !more ? `<span class="none-display">"마지막 페이지 입니다"</span>` : "" }
      </div>
    `
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
