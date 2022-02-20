import Component from "../../core/Component.js";
import store from "../../store.js";

export class PostButton extends Component{

  constructor(root){
    super()
    if(root) this.el = root.querySelector("#postbutton")
  }

  setEvent(){
    this.el.addEventListener("click", this.eventHandler)
  }
  
  eventHandler({target}){
    // store.setState(store.state)
    
    const url = location.origin + '/post-edit';
    store.setPath('/post-edit');
    
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