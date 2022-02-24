import  Component  from "../lib/Component.js";
import { PostListPage } from "./PostListPage.js";
import { PostSinglePage } from "./PostSingle.js";

export class App extends Component{

  constructor({ name }){
    super({ name })
    this.components.push(new PostListPage({ name : 'postlistpage' }));
    this.components.push(new PostSinglePage({ name :'postsingle' }));
  }

}
