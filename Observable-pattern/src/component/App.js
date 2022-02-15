import Component from "./Component.js" 
import { Header } from "./Header.js"
import { PostList } from "./Postlist.js"
import { Pagination } from "./Pagination.js";
import { serverTemplate } from "../serverTemplate.js";
import store from "../core/Store.js";

export class App extends Component{
  
  child
  constructor(state){
    super()
    this.state = state
    this.child = [] 
    this.child.push(new Header(state))
    this.child.push(new PostList(state))
    this.child.push(new Pagination(state))

  }

  setEvent(){

  }
  
  addEvent(){

  }

  template(){
    return this.child.map(node => node.template()).join("") 
  }

  render(){
    this.child.map(comp => comp.render())
    // store.html = this.template()
    // this.el.innerHTML = this.template()
  }

  serverRender(){
    return serverTemplate(this.template(), store.state)
  }


}

