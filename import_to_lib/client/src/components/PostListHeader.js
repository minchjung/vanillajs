import Component from '../core/Component.js'
import { router, store } from "../csr.js";

export class PostListHeader extends Component{
  
  child;

  constructor(){
    super()
    this.child = []
    this.child.push( new Search() )
    this.child.push( new Paging() )
    this.child.push( new Sorting() )
    this.child.push( new SortButton() )
    this.child.push( new RefreshAll() )

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

export class Search extends Component{

  filter; el;
  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
    this.secondBonder = this.secondHandler.bind(this);

  }

  setEvent(){
    this.el = router.$root.querySelector('#search')

    this.el.querySelector('button').removeEventListener("click", this.boundHandler);
    this.el.querySelector('button').addEventListener("click", this.boundHandler);
    
    this.el.querySelector('input').removeEventListener("keypress", this.secondBonder);
    this.el.querySelector('input').addEventListener("keypress", this.secondBonder);
  }
  
  eventHandler({ target }){
    const { action } = target.dataset ;
    if( action === 'searchInput' ) return 
    if( action === 'searchBtn'){
      const value = this.el.querySelector('input').value
      store.setState({ filter : value, page : 1 })
    }
    // console.log(target)
    // store.setState(store.state)
  }

  secondHandler(e){
    this.filter = e.target.value
    if(e.code === 'Enter' && this.filter !== store.state.filter){
      store.setState({ filter : (e.target.value), page : 1 })
    }
  }

  template(){
    const keyword = store.state.filter
    return `
    <div data-component="search" id="search">
      <input 
        data-action='searchInput' 
        placeholder="search" 
        type="text" 
        value=${keyword? keyword : ""}>
      <button data-action='searchBtn'>검색</button>
    </div>
  `;
  } 

  render(){
    const renderHtml = this.template();
    if(this.el){
      this.el.innerHTML = renderHtml;
      requestAnimationFrame(()=> this.setEvent())
    } 
    return renderHtml
  }

}

export class Paging extends Component {

  size;

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setEvent(){
    this.el = router.$root.querySelector("#paging")
    this.el.removeEventListener("change", this.boundHandler)
    this.el.addEventListener("change", this.boundHandler)
  }
  
  eventHandler({ target }){
    store.setState({ size : Number(target.value), page : 1 })
  }

  template(){
    const select = Number(store.state.size)
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
    const renderHtml = this.template();
    if(this.el){
      this.el.innerHTML = renderHtml;
      requestAnimationFrame(()=> this.setEvent())
    } 
    return renderHtml
  }

}

export class Sorting extends Component{
  
  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setEvent(){
    this.el = router.$root.querySelector("#sorting")
    this.el.removeEventListener("change", this.boundHandler)
    this.el.addEventListener("change", this.boundHandler)
  }
  
  eventHandler({ target }){
    store.setState( { order : target.value, page : 1 } )
  }

  template(){
    const selected = store.state.order
    return `
    <div data-component='sorting' id="sorting">
      <label for="sorting">날짜정렬</label>
      <select data-action="order">
        <option 
            name='order' value="dsc" 
            ${selected === 'dsc'? "selected" : ""}>최신</option>
        <option 
            name='order' value="asc"
            ${selected === 'asc'? "selected" : ""}>예전</option>
      </select>
    </div>`
    ;
  }

  render(){
    const renderHtml = this.template();
    if(this.el){
      this.el.innerHTML = renderHtml;
      requestAnimationFrame(()=> this.setEvent())
    } 
    return renderHtml
  }

}

export class SortButton extends Component{

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setEvent(root){
    this.el = router.$root.querySelector("#sortbutton")
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener("click", this.boundHandler)
  }
  
  eventHandler({ target }){
    store.setState({ filter : "", order : 'dsc', name : "",  page : 1, size : 5 })
  }

  template(){
    return `
      <button id="sortbutton">초기화</button>
    `;
  }

  render(){
    const renderHtml = this.template();
    if(this.el){
      this.el.innerHTML = renderHtml;
      requestAnimationFrame(()=> this.setEvent())
    } 
    return renderHtml
  }

}

export class RefreshAll extends Component{

  constructor(){
    super()
    this.boundHandler = this.eventHandler.bind(this);
  }

  setEvent(){
    this.el = router.$root.querySelector("#refreshall") 
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener("click", this.boundHandler)
  }
  
  eventHandler({ target }){
    window.location.reload()
  }
  
  template(){
    return `
      <button id="refreshall">새로고침</button>
    `;
  }

  render(){
    const renderHtml = this.template();
    if(this.el){
      this.el.innerHTML = renderHtml;
      requestAnimationFrame(()=> this.setEvent())
    } 
    return renderHtml
  }
}