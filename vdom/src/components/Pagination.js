import { store } from "../store.js";

let hasHandler = false
let worked = false 

export const Pagination =() =>{
  if(worked) return 
  const { total, size, cur, data, startIdx } = store.state
  const end = startIdx*(1+size) 
  // console.log("pagination")

  const eventHandler =({ target }) => {
    // console.log('eventHandler')
    return store.setState({ cur : target.value})
  }
  const setEvent = () => {
    if(hasHandler) return  
    const $el = document.querySelector('#pagination')
    $el.removeEventListener('change', eventHandler)
    $el.addEventListener('change', eventHandler) 
    hasHandler = true
    return 
  }
  
  const template = () => `
      <div id="pagination">
        ${PageBtn()}
      </div>
    `;

  const render = () =>{ 
    console.log("render")
    store.root ? requestAnimationFrame(()=> setEvent()) : null
    return template()
  }

  return !worked ? render() : null
  
}

export const PageBtn = () => {
  // const lit =  data.slice(startIdx, end).map((num,idx) => 
  return new Array(10).fill(0).map((num, idx) => 
    `<button data-action="page-"${+idx+1}>${idx+1}</button>`
    ).join("")
}