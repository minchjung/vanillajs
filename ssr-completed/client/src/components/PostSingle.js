import { router, store } from "../../csr.js";
import Component from '../lib/Component.js'

export class PostSinglePage extends Component{
  
  child; 

  constructor({ name, state }){
    super({ name, state })
    // this.root = root;
    this.child = [];
    this.child.push( new Header({ name : 'header', state }))
    this.child.push( new Contents({ name : 'contents', state }))
    this.child.push( new BottomButton({ name : 'bottombutton', state }))

  }

}


export class Header extends Component{
  

  template(){
    const index = Number(router.routeState.value)
    const { data } = this.state 
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

}

export class Contents extends Component{


  template(){
    const index = Number(router.routeState.value)
    const { data } = this.state 
    return `
      <div id="contents">
        <p>${data[index].content}</p>
      </div>
    `;  
  }
  
}

export class BottomButton extends Component{
  

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({ target }){
    const { action } = target.dataset; 

    if(action === "edit"){
      // routing to edit-page
      console.log(this.state)
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

}
