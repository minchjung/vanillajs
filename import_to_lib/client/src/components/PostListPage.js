import { PostListHeader } from "./PostListHeader.js"
import { PostButton, Postlist, Pagination } from "./Postlist.js"
import Component from '../core/Component.js'

export class PostListPage extends Component{
  
  constructor(){
    super()
    this.child = [] 
    this.child.push(new PostListHeader())
    this.child.push(new Postlist())
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
