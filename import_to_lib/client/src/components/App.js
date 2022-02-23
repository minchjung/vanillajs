import  Component  from "../lib/RenderView";
import { PostListPage } from "./PostListPage.js";
import { PostSingle } from "./PostSingle.js";
import { router } from "../csr.js";

export class App extends Component{

  constructor(){
    super()
    this.component.push(new PostListPage('postlistpage'));
    this.component.push(new PostSingle('postsingle'));
  }

}
