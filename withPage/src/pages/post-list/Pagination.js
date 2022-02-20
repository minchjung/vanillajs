import Component from "../../core/Component.js";
import store from "../../store.js";

export class Pagination extends Component{

  page; group

  constructor(root){
    super()
    if(root) this.el = root.querySelector("#pagination")
    this.boundHandler = this.eventHandler.bind(this);
  }

  setEvent(){
    this.el.removeEventListener("click", this.boundHandler)
    this.el.addEventListener("click", this.boundHandler)
  }
  
  eventHandler({target}){
    const { action } = target.dataset ;
    const { page } = store.state
    if(action === 'more'){
      store.setState({ page : Number(page) + 1 })
    }
    if(action === 'less'){
      store.setState({ page : Number(page) -1 })
    }
  }

  template(){
    const { page, size, total, data } = store.state;
    const less = Number(page) > 1;
    const more = Number(size)*Number(page) < Number(total) ;
    // console.log(total , more)

    return `
      <div id=pagination>
      ${ Number(total) === 0 ? `<span class="none-display">"게시글이 존재 하지 않습니다."</span>` : ""}
      ${ less ? `<button data-action="less">이전</button>` : "" }
      ${ more ? `<button data-action="more">더보기</button>` : "" }
      ${ Number(total) && !more ? `<span class="none-display">"마지막 페이지 입니다"</span>` : "" }
      </div>
    `
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