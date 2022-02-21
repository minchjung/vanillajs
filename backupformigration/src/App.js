import store from "./store.js";
import Component from "./core/Component.js";
import PostListPage from "./pages/post-list/PostListPage.js";
import { PostSingle } from "./pages/post-single/PostSingle.js";
import router from "./router.js";

class App extends Component{
  el;
  constructor(){
    super()
    this.component =[];
    this.component.push(new PostListPage());
    this.component.push(new PostSingle());
  }
  
  template(renderHtml){
    return `
      <div id="root">${renderHtml}</div>
    `;
  }

  setEvent(){
    this.el = router.$root; 
    this.component[router.getCurIndex()].setEvent();  
  }

  render(){
    const cur = router.getCurIndex()
    let renderHtml = this.template(this.component[cur].render())
    return renderHtml; 
  }


}

export default App