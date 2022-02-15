import Publisher from "./Publisher.js";
import { App } from "../component/App.js";

const dataSetting = (dataLength = 30) => {
  return new Array(dataLength).fill(0).map((ele, idx) => {
    return {
      id : idx+1, 
      title : `title${idx+1}`,
      writer : `name${idx+1}`,
      content : `content${idx+1}`,
      date : `2022-1-${idx+1}`
    }
  })
}

const totalData = dataSetting(537)
const initialState = {
    data : totalData,
    total : 537,
    cur : 1,
    size : 5,
    startIdx : 1, 
    group : 0
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
