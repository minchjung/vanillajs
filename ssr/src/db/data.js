// ---- DATABASE ----
// Total data setter 
export const  setData = (dataLength = 30) => {
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
export const dbTotalData = setData(100); // Total data  (temporal 100)

// ---- Query executor ---- 
export const queryExecutor = {

  // SELECT * FROM _ WHERE all culumn LIKE '%keyword%' 
  filterByKeyWord : (keyword, data=dbTotalData) => {
    // filter by search keyworkd
    return keyword === "" 
    ? data 
    : data.filter( ele =>{
        let bool = false 
        for(let [ key,val ] of Object.entries(ele)){
          if(key === 'id' || key ==='date' || key === 'index') continue
          // console.log( val, keyword)
          if(!String(val).includes(keyword)) continue 
          bool = true 
          // console.log(ele) 
          break
        }
        return bool
    })
  },

  // SELECT * FROM _ WHERE writer = name
  filterByName : (name, data=dbTotalData) => {
    // filter by writer name
    return  name === "" 
    ? data 
    : data.filter( ele =>{
        let bool = false 
        for(let [ key,val ] of Object.entries(ele)){
          if(key === 'writer' && String(val) === name ){
            bool = true
            break
          }
        }
        return bool
    })
  },

  // LIMIT & OFFSET 
  setRange : (page, size, offset, end) => {
    // set view data range  
    let _from = (page - 1) * size - offset; 
    _from = _from < 0 ? 0 : _from; 

    let _to = _from + size + offset;
    _to = _to >= end ? end : _to; 
    // console.log(page, size, _from, _to)
    return [_from, _to, end] 
  },
  
  // ORDER BY & INDEX
  setIndexData : (order, _data) => {
    _data = order === 'dsc' ? _data.reverse() : _data
    
    return _data.slice()
      .map((item, idx) => {
      item['index'] = idx
      return item
    })
  }
}
// set state value 
export const updateStateByQueryExecutor =(state) =>{
  let{ filter, name, order, page, size, data, total } = state

  page = Number(page); size= Number(size);
  console.log("executor=", page, size, filter, name, order)
  
  let filtered = queryExecutor.filterByName(name, queryExecutor.filterByKeyWord(filter));
  let [ from, to ] = queryExecutor.setRange(page, size, 0, filtered.length);

  let totFilterData = queryExecutor.setIndexData(order, filtered.slice());
  data = totFilterData.slice(from, to);
  total = totFilterData.length; 
  // console.log(data)
  state = { ...state, data, total }
  return state 
}
