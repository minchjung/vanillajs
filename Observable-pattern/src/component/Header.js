import Component from "./Component.js";
import store from "../core/Store.js";
import { pageApiHandler } from "../core/EventHandler.js";

export class Header extends Component{
  
  child;

  constructor(state){
    super()
    this.state = state
    this.child = []
    this.child.push( new Search(state) )
    this.child.push( new Paging(state) )
    this.child.push( new Sorting(state) )

  }

  setElement(root){
    this.el = root.querySelector("#header")
    this.child.map(node => node.setElement(root))
  }

  template(){
    return `
      <header data-component= "header" id=header>
        ${ this.child.map(node => node.template()).join("") }
      </header>
    `
  }

  render(){
  }
}

class Search extends Component{

  constructor(state){
    super()
    this.state = state
  }

  setElement(root){
    this.el = root.querySelector("#search")
    this.setEvent()
  }

  setEvent(){
    this.el.addEventListener("click", this.eventHandler)
  }
  
  eventHandler({target}){
  }

  template(){
    return `
    <div data-component="search" id="search">
      <input data-action='searchInput' type="text" placeholder="search">
      <button data-action='searchBtn'>검색</button>
      <button data-action="refAll">새로고침</button>
      <button data-action="refSort">정렬초기화</button>
    </div>
  `;
  } 

  render(){
  }

}

class Paging extends Component {
  size;
  constructor(state){
    super()
    this.state = state
  }

  setElement(root){
    this.el = root.querySelector("#paging")
    this.setEvent()
  }

  setEvent(){
    this.el.addEventListener("change", ({target})=>{
      return this.eventHandler(target, this.state)
    })
  }
  
  eventHandler(target){
    if(this.size) return
    this.size = target.value
    console.log(store.state.cur)

    pageApiHandler({ page : 1, size :this.size })
      .then(result => {
        // console.log(result)
        store.setState(result)
        this.size = undefined
      })
  }

  render(){
    // console.log(store.observers[5].template())
    // store.observers[5].el.innerHTML = store.observers[5].template()
  }

  template(){
    const select = store.state.size
    return `
      <div data-component=paging id="paging">
        <label for="pagination" value=${store.state.size}>페이지</label>
          <select data-action ="page">
          <option value=5 ${select === 5? "selected" : ""}>5</option>
          <option value=10 ${select === 10? "selected" : ""}>10</option>
          <option value=20 ${select === 20? "selected" : ""}>20</option>
        </select>
      </div>
    `;
  }
}

class Sorting extends Component{
  
  setElement(root){
    this.el = root.querySelector("#sorting")
    this.setEvent()
  }

  setEvent(){
    this.el.addEventListener("change", this.eventHandler)
  }
  
  eventHandler({target}){
  }

  template(){
    return `
    <div data-component='sorting' id="sorting">
      <label for="sorting">날짜정렬</label>
      <select data-action="order">
        <option value="asc">예전</option>
        <option value="dsc">최신</option>
      </select>
    </div>`
    ;
  }
}