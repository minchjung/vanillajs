import Component from "./Component.js";
import store from "../store.js";

export class Header extends Component{
  
  child;

  constructor(){
    super()
    this.child = []
    this.child.push( new Search() )
    this.child.push( new Paging() )
    this.child.push( new Sorting() )
    this.child.push( new SortButton )
    this.child.push( new RefreshAll() )

  }

  setEvent(){
    this.child.map(node => node.setEvent())
  }

  setElement(root){
    this.el = root.querySelector("#header")
    this.child.map(node => node.setElement(root))
  }

  template(renderHtml){
    return `
      <header id=header>
        ${renderHtml}
      </header>
    `
  }

  render(){
    const renderHtml = this.child.map(node => node.render()).join("")
    return this.template(renderHtml)
  }
}

class Search extends Component{

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
    this.secondBonder = this.secondHandler.bind(this);
  }
  setElement(root){
    this.el = root.querySelector("#search");
  }

  setEvent(){

    this.el.removeEventListener("click", this.boundHandler);
    this.el.addEventListener("click", this.boundHandler);
    
    this.el.removeEventListener("change", this.secondBonder);
    this.el.addEventListener("change", this.secondBonder);
    
  }
  
  eventHandler({ target }){
    const { action } = target.dataset ;
    if( action === 'searchInput' ) return 
    
    console.log(target)
    // store.setState(store.state)
  }

  secondHandler({ target }){
    console.log(target)
  }

  template(){
    return `
    <div data-component="search" id="search">
      <input data-action='searchInput' type="text" placeholder="search">
      <button data-action='searchBtn'>검색</button>
    </div>
  `;
  } 

  render(){
    return this.template()
  }

}

class Paging extends Component {

  size;

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setElement(root){
    this.el = root.querySelector("#paging")
  }

  setEvent(){
    this.el.removeEventListener("change", this.boundHandler)
    this.el.addEventListener("change", this.boundHandler)
  }
  
  eventHandler({ target }){
    store.setState(store.state)

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

  render(){
    return  this.template()
  }

}

class Sorting extends Component{
  
  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setElement(root){
    this.el = root.querySelector("#sorting")
  }

  setEvent(){
    this.el.removeEventListener("change", this.boundHandler)
    this.el.addEventListener("change", this.boundHandler)
  }
  
  eventHandler({ target }){
    store.setState( { order : target.value } )

    console.log(store.state)
  }

  template(){
    return `
    <div data-component='sorting' id="sorting">
      <label for="sorting">날짜정렬</label>
      <select data-action="order">
        <option name='order' value="dsc">최신</option>
        <option name='order' value="asc">예전</option>
      </select>
    </div>`
    ;
  }

  render(){
    return  this.template()
  }

}

export class SortButton extends Component{

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setElement(root){
    this.el = root.querySelector("#sortbutton")
  }

  setEvent(){
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener("click", this.boundHandler)
  }
  
  eventHandler({ target }){
    store.setState(store.state)
    console.log(target)
  }

  template(){
    return `
      <button id="sortbutton">정렬초기</button>
    `;
  }

  render(){
    return this.template()
  }

}

export class RefreshAll extends Component{

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setElement(root){
    this.el = root.querySelector("#refreshall")
  }

  setEvent(){
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener("click", this.boundHandler)
  }
  
  eventHandler({ target }){
    store.setState(store.state)
    console.log(target)

  }
  
  template(){
    return `
      <button id="refreshall">새로고침</button>
    `;
  }

  render(){
    return this.template()
  }
}