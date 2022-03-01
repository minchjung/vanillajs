import  Component  from "../lib/Component.js";
import { PostListPage } from "./PostListPage.js";
import { PostSinglePage } from "./PostSingle.js";
import { PostEditPage } from './PostEditPage.js';
import { NoutFoundPage } from "./NotFoundPage.js";
import { store, router } from '../../csr.js'

class App extends Component{

  constructor({ name, state }){
    super({ name, state })
    this.historyBounder = this.historyHandler.bind(this);
    this.components.push(new PostListPage({ name : 'postlistpage' , state}));
    this.components.push(new PostSinglePage({ name :'postsingle', state }));
    this.components.push(new PostEditPage({ name :'posteditpage', state }));
    this.components.push(new NoutFoundPage({ name :'notfoundpage', state }));
  }

  onLoad(){
    window.removeEventListener('popstate', this.historyHandler)
    window.addEventListener('popstate', this.historyHandler)
  }

  historyHandler(event){
    if( !event.state) return location.assign(location.href);

    const pathname = location.pathname 
    router.setPathCur(pathname);
    // store.setState(event.state.state)
    store.cacheHandler.searchCache(event.state.state, true)
    // console.log(history)
    // router.templateRender();
  }

  template(){
    const renderHTML = this.components[this.curPos].template();
    return `<div id=${this.name}>
        ${renderHTML}
    </div>`;
  }

  render(){
    this.root.innerHTML= this.template() //(should be oldOne after diff);
    requestAnimationFrame(()=> this.setRoot())

  }

}

export default new App({ name : 'app'})