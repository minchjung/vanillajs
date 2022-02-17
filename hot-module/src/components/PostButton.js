import Component from "./Component.js";
import store from "../store.js";

export class PostButton extends Component{

  setElement(root){
    this.el = root.querySelector("#postbutton")
  }

  setEvent(){
    this.el.addEventListener("click", this.eventHandler)
  }
  
  eventHandler({target}){
    store.setState(store.state)
    console.log(target)
  }

  template(){
    return `
      <div id=postbutton>
        <button>작성</button>
      </div>
    `
  }

  render(){
    return this.template()
  }
}