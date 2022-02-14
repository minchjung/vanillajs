import Component from "./Component.js";

export default class Header extends Component{
  child;
  constructor(state, root){
    super(state, root)
    this.child = []
    this.child.push( new Search )
    this.child.push( new Paging )
    this.child.push( new Sorting )
    this.addEvent()
  }
  template(){
    return `
      <header id=header>
        ${ this.child.map(node => node.template()).join("") }
      <header>
    `
  }
  
  setEvent(){

  }
  eventHandler({target}){
    const state = this.state
  }
  addEvent(){
    if(!this.root) return 
    this.root.querySelector("#header").addEventListener('change', ({ target })=>{
      if(!target.dataset) return 
      if(target.dataset.action === 'page') console.log(this)
      if(target.dataset.action === 'order') console.log(target.value)

    })

  }


}

class Search extends Component{

  constructor(){
    super()
  }
  template(){
    return `
    <div id="search">
      <input data-action='searchInput' type="text" placeholder="search">
      <button data-action='searchBtn'>검색</button>
      <button data-action="refAll">새로고침</button>
    </div>
  `;
  } 

}

class Paging extends Component {

  template(){
    return `
      <div id="paging">
        <label for="pagination">페이지</label>
          <select data-action ="page" name="page" id="pagination">
          <option value=5>5</option>
          <option value=10>10</option>
          <option value=30>30</option>
        </select>
      </div>
    `;
  }
}

class Sorting extends Component{
  
  template(){
    return `
    <div id="sorting">
      <label for="sorting">날짜정렬</label>
      <select data-action="order">
        <option value="asc">예전</option>
        <option value="dsc">최신</option>
      </select>
      <button data-action="refSort">정렬초기화</button>
    </div>`
    ;
  }
}