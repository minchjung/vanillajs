import Component from "./Component.js";
import store from "../core/Store.js";
import { getDataByIndex } from "../core/EventHandler.js";

export class Pagination extends Component{

  page; group
  constructor(state){
    super();
    this.state = state 
    
  }

  template(){
    const {page, size, total, group } = this.state
    const tot = new Array(Math.ceil(total /(size)))
    .fill(0).map((ele, idx) => idx )
    const groups = tot.filter(ele => ele >= page-1 && ele <= page + 8)
    // console.log(tot, groups, page)

    return `
      <div data-component='pagination' id="pagination">
        ${
          groups[0] !== 0 
          ? `<button data-action="prev"><</button>` : ""
        }
        ${
          groups.map(ele => 
            `<button data-action="page-button" value=${ele+1}>${ele + 1}</button>`
            ).join("")
        }
        ${
          tot[groups[groups.length-1]] 
          ? `<button data-action="next" id="next">></button>` : ""
        }
      </div>
    `;
  }

  setElement(root){
    this.el = root.querySelector("#pagination")
    this.setEvent()
  }

  setEvent(){
    requestAnimationFrame(() => {
	    this.el.removeEventListener('click', this.eventHandler);
      this.el.addEventListener("click", this.eventHandler);
		});
  }
  
  eventHandler({ target }){
    const { action } = target.dataset
    let { group } = store.state

    // prevent to trigger by same event
    if( this.page !== undefined 
      && this.page === target.value) return 
    if( !(action === "page-button" || action === "next") ) return 
    

    // number page event
    if(action === "page-button"){
      this.page = target.value 
      store.setState({ page : Number(target.value) })
    }
    // page over to next group 
    if(action === "next"){
      getDataByIndex(store.state)
      .then(result => {
        store.setState(result)
        
        const { search, order, total, name } = store.state
        window.localStorage.removeItem('id');
        window.localStorage.setItem('id', search+order+total+name)

      })

    }
    // console.log(store.state)
  }

  render(){
    console.log(this.group, store.state.group)
    // only render for group change
    if(this.group === undefined) this.group = store.state.group 
    if(this.group === store.state.group) return 
    this.el.innerHTML  = this.template()
    this.setEvent()
  }
}