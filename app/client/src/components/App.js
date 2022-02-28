import  Component  from "../lib/Component.js";
import { PostListPage } from "./PostListPage.js";
import { PostSinglePage } from "./PostSingle.js";
import { PostEditPage } from './PostEditPage.js'
import { store, router } from '../../csr.js'

class App extends Component{

  constructor({ name, state }){
    super({ name, state })
    this.historyBounder = this.historyHandler.bind(this);
    this.components.push(new PostListPage({ name : 'postlistpage' , state}));
    this.components.push(new PostSinglePage({ name :'postsingle', state }));
    this.components.push(new PostEditPage({ name :'posteditpage', state }));
  }

  onLoad(){
    window.removeEventListener('popstate', this.historyHandler)
    window.addEventListener('popstate', this.historyHandler)
  }

  historyHandler(event){
    if( !event.state) location.assign(location.href);
   
    // console.log("location: " + location + ", state: " + JSON.stringify((event.state)));
    console.log(location.search.split('?')[1].split('=').join('').split('&'))
    const newState = location.search.split('?')[1]
      .split('=').join('')
      .split('&').reduce((tot,ele)=>{
        tot.filter = ele.includes('filter') ? ele.slice(6) : tot.filter ? tot.filter : "" 
        tot.name = ele.includes('name') ? ele.slice(4) : tot.name ? tot.name : "";
        tot.order = ele.includes('order') ? ele.slice(5) :tot.order ? tot.order : "";
        tot.page = ele.includes('page') ? ele.slice(4) : tot.page ? tot.page : "" ;
        tot.size = ele.includes('size') ? ele.slice(4) : tot.size ? tot.size : "" ;
        tot.total = ele.includes('total') ? ele.slice(5) : tot.total ? tot.total : "";
        return tot;
    },{})

    const pathname = location.pathname 
    // console.log(newState)
    router.setPathCur(pathname)
    store.setState(newState)
    // location.assign(location.href);
    // else {
    //   console.log(location.query) 
    //   router.setPathCur(location.pathname) 
    // }
  }
  template(){
    const renderHTML = this.components[this.curPos].template();
    return `
        ${renderHTML}
    `;
  }
}

export default new App({ name : 'app'})