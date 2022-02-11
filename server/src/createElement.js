/** @jsx h */
function h(type, props, ...children) { 
  return { type, props, children : children.flat() }
}

function createElement(node){
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const $el = document.createElement(node.type);

  Object.entries(node.props || {})
        .filter(([attr, value]) => value)
        .forEach(([attr, value]) => (
          $el.setAttribute(attr, value)
        ));
  try {
    node.children
        .map(createElement)
        .forEach(child => $el.appendChild(child));
  } catch (e) {
    console.log(node);
    console.error(e);
  }
  return $el;
}
const state = [
  { id: 1, completed: false, content: 'todo list item 1' },
  { id: 2, completed: true, content: 'todo list item 2' },
];

const ele =(
  <div id="app">
    <ul>
      <li>
        <input type="checkbox" class="toggle" />
        todo list item 1
        <button class="remove">삭제</button>
      </li>
      <li class="completed">
        <input type="checkbox" class="toggle" checked />
        todo list item 2
        <button class="remove">삭제</button>
      </li>
    </ul>
    <form>
      <input type="text" />
      <button type="submit">추가</button>
    </form>
  </div>
);