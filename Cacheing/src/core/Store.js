import Publisher from "./Publisher.js";
import { App } from "../component/App.js";
import { getData } from "../db/data.js";


const totalData = getData(0,600)

// caching id = 검색어 + 정렬조건 + total data 크기
const initialState = {
    id : ""+"asc"+"537",
    data : totalData.slice(0,200),
    page : 1,
    size : 5,
    group : 0,
    total : 537,
    search : "",
    order : "asc",
    name : '',
}

const makeSubscriber = (node) =>{
  store.subscribe(node)
  if(node.child && node.child.length !==0){
    node.child.map(ele => makeSubscriber(ele))
  }
}

const store = new Publisher(initialState)
makeSubscriber(new App())


export default store
