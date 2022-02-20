import Component from "../../core/Component.js";
import store from "../../store.js";

export class PostSingle extends Component{
  
  child; root;

  constructor(root){
    super()
    // this.root = root;
    this.child = [];
    this.child.push( new Header(root))
    this.child.push( new Contents(root))
    this.child.push( new BottomButton(root))

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
    console.log("postsingle", renderHtml)
    return this.template(renderHtml)
  }
}


export class Header extends Component{
  

  template(renderHtml){
    console.log(history.state)
    return `
      <header id="header">
        <span>글번호</span>
        <span>제목</span>
        <span>작성자</span>
        <span>날짜</span>
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
    
    return `
      <div id="contents">
        <p></p>
      </div>
    `;  
  }
  
  render(){
    const renderHtml = this.template() ;
    return renderHtml
  }
}

export class BottomButton extends Component{
  
  root
  constructor(root){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }
  

  setEvent(){
    this.el = document.querySelector("#bottombutton");
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
