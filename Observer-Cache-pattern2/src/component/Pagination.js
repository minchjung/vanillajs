import Component from "./Component.js";
import store from "../store.js";

export class Pagination extends Component{

  page; group

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setElement(root){
    this.el = root.querySelector("#pagination")
  }

  setEvent(){
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener("click", this.boundHandler)
  }
  
  eventHandler({target}){
    store.setState(store.state)
    console.log(target)
  }

  template(){
    return `
      <div id=pagination>
        <button data-action="more">더보기</button>
        <button data-action="less">이전</button>
      </div>
    `
  }

  render(){
    return this.template()
  }
}