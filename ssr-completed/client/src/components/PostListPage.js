import Component from '../lib/Component.js';
import { store, router } from "../../csr.js";

export class PostListPage extends Component{
  
  constructor({ name, state }){
    super({ name, state })
    this.child = [] 
    this.child.push(new PostListHeader({ name : 'postlistheader', state }))
    this.child.push(new Postlist({ name : 'postlist' , state }))
    this.child.push(new Pagination({ name : 'pagination', state }))
    this.child.push(new PostButton({ name : 'postbutton' , state }))
  }
  
}

export class PostListHeader extends Component{
  
  child; 

  constructor({ name, state }){
    super({ name, state })
    this.child = []
    this.child.push( new Search({ name : 'search' , state }) )
    this.child.push( new Paging( { name :'paging', state  }) )
    this.child.push( new Sorting( { name : 'sorting', state }) )
    this.child.push( new SortButton( { name : 'sortbutton', state }) )
    this.child.push( new RefreshAll({ name :'refreshall', state }) )

  }

}

export class Search extends Component{


  setEvent(){
    this.el.querySelector('button').removeEventListener("click", this.firstBonder);
    this.el.querySelector('button').addEventListener("click", this.firstBonder);
    
    this.el.removeEventListener("keyup", this.secondBonder);
    this.el.addEventListener("keyup", this.secondBonder);
  }
  
  eventHandler({ target }){
    const { action } = target.dataset ;
    if( action === 'searchInput' ) return 
    if( action === 'searchBtn'){
      const value = this.el.querySelector('input').value
      store.setState({ filter : value, page : 1, name : '' });
      // this.state = { ...this.state, ...{ filter: value, page : 1, name : "" }}
    }

    // store.setState(store.state)
  }

  secondHandler(e){
    this.filter = e.target.value

    if(e.code === 'Enter' && this.filter !== store.state.filter){
      store.setState({ filter : (e.target.value), page : 1 })
      // this.state = { ...this.state, ...{ filter : (e.target.value), page : 1 } }

      // console.log("search button after state==", store.state)

    }
  }

  template(){
    const keyword = store ? store.state.filter : this.state.filter
    return `
    <div data-component="search" id="search">
      <input 
        data-action='searchInput' 
        placeholder="search" 
        type="text" 
        value=${keyword? keyword : ""}>
      <button data-action='searchBtn'>??????</button>
    </div>
  `;
  } 

}

export class Paging extends Component {


  setEvent(){
    
    this.el.removeEventListener("change", this.firstBonder)
    this.el.addEventListener("change", this.firstBonder)
  }
  
  eventHandler({ target }){
    // console.log(target)
    store.setState({ size : Number(target.value), page : 1 })
    // console.log(store)
    // this.state = { ...this.state, ...{ size : Number(target.value), page : 1 } }
  }

  template(){
    const select =  store ? Number(store.state.size) :  Number(this.state.size)
    return `
      <div data-component=paging id="paging">
        <label for="pagination" value=${select}>?????????</label>
          <select data-action ="page">
          <option value=5 ${select === 5? "selected" : ""}>5</option>
          <option value=10 ${select === 10? "selected" : ""}>10</option>
          <option value=20 ${select === 20? "selected" : ""}>20</option>
        </select>
      </div>
    `;
  }

}

export class Sorting extends Component{

  setEvent(){
    

    this.el.removeEventListener("change", this.firstBonder)
    this.el.addEventListener("change", this.firstBonder)
  }
  
  eventHandler({ target }){
    store.setState( { order : target.value, page : 1 } )
  }

  template(){
    const selected = store ? store.state.order : this.state.order
    return `
    <div data-component='sorting' id="sorting">
      <label for="sorting">????????????</label>
      <select data-action="order">
        <option 
            name='order' value="dsc" 
            ${selected === 'dsc'? "selected" : ""}>??????</option>
        <option 
            name='order' value="asc"
            ${selected === 'asc'? "selected" : ""}>??????</option>
      </select>
    </div>`
    ;
  }

}

export class SortButton extends Component{

  setEvent(){
    

    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({ target }){
    store.setState({ filter : "", order : 'dsc', name : "",  page : 1, size : 5 })
  }

  template(){
    return `
      <button id="sortbutton">?????????</button>
    `;
  }

}

export class RefreshAll extends Component{

  setEvent(){
    

    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({ target }){
    window.location.reload()
  }
  
  template(){
    return `
      <button id="refreshall">????????????</button>
    `;
  }

}


export class Postlist extends Component{

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener('click', this.firstBonder)
  }

  eventHandler({ target }){
    const { action } = target.dataset
    
    if( action === 'writer' ){
      store.setState({ name : target.innerText , filter : "", page : 1});
      // this.state = { ...this.state, ...{ name : target.innerText , filter : "", page : 1} }
    } 
    if( action === 'title' ){
      const { index } = target.parentElement.dataset
      const url = window.origin + "/post-single" + `?index=${index}`
      router.setRouteState(index)
      router.setPathCur('/post-single');
      history.pushState(state , "", url)
    }
  }

  template(){
    
    const items = store? store.state.data : this.state.data
    // console.log('dataaaa===',this.state.data)
    return `
    <div id='postlist'>
        ${ items.length === 0 ? "" : 
          items.map( (item, idx) => `
          <ul data-index=${idx}>  
            <li id= ${item.id}>${item.id}</li>
            <li data-action='title'>${item.title}</li>
            <li data-action='writer'>${item.writer}</li>
            <li>${item.date}</li>
          </ul>`)
          .join("")
        }
      </div>`
  }

  render(){
    // console.log('what about yo')
    this.el.innerHTML = this.template();
    requestAnimationFrame(()=> this.setEvent())
  }
}

export class PostButton extends Component{

  setEvent(){

    this.el.removeEventListener("click", this.eventHandler)
    this.el.addEventListener("click", this.eventHandler)
  }
  
  eventHandler({target}){
    
    // const url = location.origin + '/post-edit';
    // router.setPathCur('/post-edit');
    
    // history.pushState(store, "?????????", url)
  }

  template(){
    return `
      <div id=postbutton>
        <button>??????</button>
      </div>
    `
  }
  
}


export class Pagination extends Component{

  page; group

  setEvent(){

    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({target}){
    const { action } = target.dataset ;
    const { page } = store ? store.state : this.state
    if(action === 'more'){
      store.setState({ page : Number(page) + 1 })
      // this.state = { ...this.state, ...{ page : Number(page) + 1 } }
    }
    if(action === 'less'){
      store.setState({ page : Number(page) -1 })
      // this.state = { ...this.state, ...{ page : Number(page) - 1 } }

    }
  }

  template(){
    const { page, size, total, data } = store? store.state : this.state;
    const less = Number(page) > 1;
    const more = Number(size)*Number(page) < Number(total) ;
    // console.log('postListPage============', this.state)

    return `
      <div id=pagination>
      ${ Number(total) === 0 ? `<span class="none-display">"???????????? ?????? ?????? ????????????."</span>` : ""}
      ${ less ? `<button data-action="less">??????</button>` : "" }
      ${ more ? `<button data-action="more">?????????</button>` : "" }
      ${ Number(total) && !more ? `<span class="none-display">"????????? ????????? ?????????"</span>` : "" }
      </div>
    `
  }

}
