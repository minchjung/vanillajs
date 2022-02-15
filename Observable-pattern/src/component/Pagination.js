import Component from "./Component.js";
import { pageApiHandler } from "../core/EventHandler.js";
import store from "../core/Store.js";

export class Pagination extends Component{

  page;

  template(){
    const {cur, size, total, startIdx, group } = this.state
    const tot = new Array(Math.ceil(total /(size)))
                    .fill(0).map((ele, idx) => idx )
    const groups = tot.filter(ele => ele >= group && ele <= group + 9)
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
          ? `<button data-action="next">></button>` : ""
        }
      <div>
    `;
  }

  setElement(root){
    this.el = root.querySelector("#pagination")
    this.setEvent()
  }

  setEvent(){
    this.el.addEventListener("click", this.eventHandler)
  }

  eventHandler({ target }){

    if( target.dataset.action === 'page-button' 
      && this.page !== undefined 
      && this.page === target.value) return 
    if( target.dataset.action === 'next' ){
      
    }

    this.page = target.value
    console.log(this.page)

    pageApiHandler({ size : store.state.size,  page : this.page })
      .then(result => {
        console.log(result)
        store.setState(result)
      })
  }


  render(){
    this.template()
  }
}