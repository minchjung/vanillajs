import  Component  from "../lib/Component.js";
import { PostListPage } from "./PostListPage.js";
import { PostSinglePage } from "./PostSingle.js";

class App extends Component{

  constructor({ name, state }){
    super({ name, state })
    this.components.push(new PostListPage({ name : 'postlistpage' , state}));
    this.components.push(new PostSinglePage({ name :'postsingle', state }));
  }

  template(){
    const renderHTML = this.components[this.curPos].template();
    return `
        ${renderHTML}
    `;
  }
}

export default new App({ name : 'app'})