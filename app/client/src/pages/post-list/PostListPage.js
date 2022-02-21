import { Header } from "./Header.js"
import { PostList } from "./Postlist.js"
import { Pagination } from "./Pagination.js";
import { PostButton } from "./PostButton.js";
import Component from "../../core/Component.js";
import store from "../../store.js";

class PostListPage extends Component{
  
  constructor(){
    super()
    this.child = [] 
    this.child.push(new Header())
    this.child.push(new PostList())
    this.child.push(new Pagination())
    this.child.push(new PostButton())
  }
  
  template(renderHtml){
    return `
      <div id="postlistpage">${renderHtml}</div>
    `;
  }

  render(){
    let renderHtml = this.template(this.child.map(comp => comp.render()).join(""))
    return renderHtml;
  }

}
export default PostListPage