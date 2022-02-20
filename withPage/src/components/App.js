import { Header } from "./Header.js"
import { PostList } from "./Postlist.js"
import { Pagination } from "./Pagination.js";
import { PostButton } from "./PostButton.js";
// import Subscriber from "../core/Subscriber.js";
import store from "../store.js";
import Component from "./Component.js";

class App extends Component{
  
  constructor(root){
    super()
    this.el = root
    this.child = [] 
    this.child.push(new Header(root))
    this.child.push(new PostList(root))
    this.child.push(new Pagination(root))
    this.child.push(new PostButton(root))
  }
  
  template(renderHtml){
    return `
      <div id="root">${renderHtml}</div>
    `;
  }

  render(){
    let renderHtml = this.template(this.child.map(comp => comp.render()).join(""))
    return renderHtml;
  }

}
export default App