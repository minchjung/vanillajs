import Component from "../../core/Component.js";
import router from "../../router.js";
import store from "../../store.js";

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