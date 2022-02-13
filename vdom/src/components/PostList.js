import { store } from "../store.js";

export const PostList = () =>{

  const template = () => `
  <div id="postlist">
    ${PostItem()}
  </div>
  `;

  return template()
}

export const PostItem = () => {

  const template =() => store.state.data.map(
    (data, idx) => `
      <ul id='postitem' key=${idx+1}>
        <li id= ${data.id}>${data.id}</li>
        <li data-action='title'>${data.title}</li>
        <li data-action='writer'>${data.writer}</li>
        <li>${data.date}</li>
      </ul>
    `).join("");
  ;

  return template() 
}