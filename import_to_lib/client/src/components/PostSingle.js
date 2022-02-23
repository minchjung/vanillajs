import Component from '../core/Component.js'
import { router, store } from "../csr.js";

export class PostSingle extends Component{
  
  child; 

  constructor(){
    super()
    // this.root = root;
    this.child = [];
    this.child.push( new Header())
    this.child.push( new Contents())
    this.child.push( new BottomButton())

  }
  

  template(renderHtml){
    
    return `
      <section id="postsingle">
        ${renderHtml}
      </section>
    `
  }

  render(){
    const renderHtml = this.child.map(node => node.render()).join("")
    return this.template(renderHtml)
  }
}


export class Header extends Component{
  

  template(){
    const index = Number(router.routeState.value)
    const { data } = store.state 
    return `
      <header id="header">
        <div>
          <span>글번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
        </div>
        <div>
          <span>${ data[index].id }</span>
          <span>${ data[index].title }</span>
          <span>${ data[index].writer }</span>
          <span>${ data[index].date }</span>
        </div>

      </header>
    `
  }

  render(){
    const renderHtml = this.template() ;
    return renderHtml
  }
}

export class Contents extends Component{


  template(){
    const index = Number(router.routeState.value)
    const { data } = store.state 
    return `
      <div id="contents">
        <p>${data[index].content}</p>
      </div>
    `;  
  }
  
  render(){
    const renderHtml = this.template() ;
    return renderHtml
  }
}

export class BottomButton extends Component{
  
  el;
  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }
  

  setEvent(){
    this.el = router.$root.querySelector('#bottombutton')
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener("click", this.boundHandler)
  }
  
  eventHandler({ target }){
    const { action } = target.dataset; 

    if(action === "edit"){
      // routing to edit-page
      console.log(store.state)
    }
    if(action === "list"){
      // routing to list-page
      console.log(history.state)
    }
    if(action === "delete"){
      // delete request 
    }
  }


  template(){
    return `
      <div id="bottombutton">
        <button data-action="edit">수정</button>
        <button data-action="list">목록</button>
        <button data-action="delete">삭제</button>
      </div>
    `;
  }

  render(){
    return this.template()
  }
}
