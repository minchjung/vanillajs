import { router, store } from "../../csr.js";
import Component from '../lib/Component.js'

export class PostEditPage extends Component{
  
  child; 

  constructor({ name, state }){
    super({ name, state })
    // this.root = root;
    this.child = [];
    this.child.push( new Contents({ name : 'contents', state }))

  }

}


export class Header extends Component{
  

  template(){
    const index =(router.routeState.value) 
    console.log(index)
    const { data } = store.state 
    return `
      <header id="header">
        <div>
          <span>제목</span>
          <span>작성자</span>
        </div>
        <div>
          <input 
            data-action='title'
            type='text'
            value=${ index ? data[Number(index)].title  : ""}
            >
          <input
            data-action='writer'
            type='text'
            value=${ index ? data[Number(index)].writer : ""}
          >
        </div>
      </header>
    `
  }

}

export class Contents extends Component{

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({ target }){

  }
  template(){
    const index = (router.routeState.value)
    const { data } = store.state
    return `
      <div id="contents">
        <p> 제 목
          <input 
          data-action='title'
          type='text'
          value=${ index ? data[Number(index)].title  : ""}
          >
        </p>
        <p> 작성자
          <input
          data-action='writer'
          type='text'
          value=${ index ? data[Number(index)].writer : ""}
          >
        </p>
        <p>
        <textarea cols="50" rows="20">${index ? data[Number(index)].content : "" }</textarea>
        </p>
        <input data-action='submit' type='submit'>
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

  }


  template(){
    return `
      <div id="bottombutton">
        <button >작성완료</button>
      </div>
    `;
  }

}
