import store from "./store.js";
import Component from "./core/Component.js";
import PostListPage from "./pages/post-list/PostListPage.js";
import { PostSingle } from "./pages/post-single/PostSingle.js";

class App extends Component{
  
  constructor(root){
    super()
    this.el = root;
    this.component =[];
    this.component.push(new PostListPage(root));
    this.component.push(new PostSingle(root));
  }
  
  template(renderHtml){
    return `
      <div id="root">${renderHtml}</div>
    `;
  }

  setEvent(){
    const componentToSet = this.component[this.routing()];  
    componentToSet.setEvent();
  }

  render(){
    const idx = this.routing();
    const componentToRender = this.component[idx];
    let renderHtml = this.template(componentToRender.render())
    console.log(idx, componentToRender)
    if(this.el && idx === 0) this.setEvent();  // no need this for server rending 
    if(this.el && idx === 1){
      this.el.innerHTML = renderHtml;
      this.setEvent();
    }
    return renderHtml; 
  }
  // routing from App to All components (on all pages)
  routing(){
    const path = store.path || '/';
    let componentIndex; 
    if(path === '/' ) componentIndex = 0; 
    if(path === '/post-single') componentIndex = 1;

    return componentIndex
  }

}

export default App