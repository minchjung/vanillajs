import Component from "./Component.js" 
import { Header } from "./Header.js"
import { PostList } from "./Postlist.js"
import { Pagination } from "./Pagination.js";
import { PostButton } from "./PostButton.js";
import store from "../store.js";

export class App extends Component{
  
  constructor(){
    super()
    this.child = [] 
    this.child.push(new Header())
    this.child.push(new PostList())
    this.child.push(new Pagination())
    this.child.push(new PostButton())

  }

  // set element when client-js executes 
  setElement(root){
    const app  = root.querySelector("#app")
    this.el = root
    this.child.map(node => node.setElement(app))

  }

  setEvent(){
    this.child.map(node => node.setEvent())
  }
  
  template(renderHtml){
    return `
      <div id=app>${renderHtml}</div>
    `;
  }
  // render every change of state 
  render(){
    
    const renderHtml = this.child.map(comp => comp.render()).join("")
    // server side rending dose not set this event
    if(!this.el){
      store.setHtml(this.template(renderHtml))
      // console.log(store)
      return 
    }

 
    // compare new Node and oldNode 
    // ㅂㅕㄴ겨ㅇ해야함!!
    let oldNode = document.querySelector("#app")
    let newNode = document.createElement('div');
    newNode = this.template(renderHtml)

    // console.log(newNode)
    console.log("its rendering by clients js")
    // console.log(newNode)
    this.setEvent()
  }

}