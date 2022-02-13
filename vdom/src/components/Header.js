import { store } from "../store.js";
export const Header = () =>{
  
  const template = () => `
    <header id ='header'>
      ${Search()}
      ${Paging()}
      ${Sorting()}
    </header>
  `;
  
  return template()
}

export const Search = () =>{
  
  const template = () => `
    <div id="search">
      <input data-action='searchInput' type="text" placeholder="search">
      <button data-action='searchBtn'>검색</button>
      <button data-action="refAll">새로고침</button>
    </div>
  `;

  return template()
} 

export const Paging = () => {

  const template = () => `
    <div id="paging">
      <label for="pagination">페이지</label>
        <select data-action ="page" name="page" id="pagination">
        <option value=5>5</option>
        <option value=10>10</option>
        <option value=30>30</option>
      </select>
    </div>
  `;
  
  return template()
}
  
export const Sorting = () =>{
  
  const template = () =>`
    <div id="sorting">
      <label for="sorting">날짜정렬</label>
      <select data-action="order">
        <option value="asc">예전</option>
        <option value="dsc">최신</option>
      </select>
      <button data-action="refSort">정렬초기화</button>
    </div>
  `;

  return template()
} 