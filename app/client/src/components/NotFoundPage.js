import Component from "../lib/Component";

export class NoutFoundPage extends Component{
  
  constructor({ name, state }){
    super({ name, state })
  }

  template(){
    return `
    <div id="notfoundpage">NOT FOUND PAGE </div>
    <div>
      <p>
        요청하신 페이지를 찾을 수 없습니다. 
      </p>
      <button>돌아가기</button>
    </div>
    `;
  }

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }

  eventHandler(){
    return location.replace('/')
  }

}
