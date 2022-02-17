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
export const dbData = setData(100); // Total data  (temporal 100)

// ---- Query executor ---- 
export const queryExecutor = {

  // SELECT * FROM _ WHERE all culumn LIKE '%keyword%' 
  filterByKeyWord : (keyword, data=dbData) => {
    // filter by search keyworkd
    return  keyword === "" 
    ? data 
    : data.filter( ele =>{
        let bool = false 
        for(let [ key,val ] of Object.entries(ele)){
          if(key === 'id') continue
          if(!val.includes(filter)) continue 
          bool = true 
          break
        }
        return bool
    })
  },

  // SELECT * FROM _ WHERE writer = name
  filterByName : (name, data=dbData) => {
    // filter by writer name
    return  name === "" 
    ? data 
    : data.filter( ele =>{
        let bool = false 
        for(let [ key,val ] of Object.entries(ele)){
          if(key === 'writer' && val === name ){
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


    return [_from, _to, end] 
  },
  
  // ORDER BY & INDEX
  getRangedData : (from, to, order, _data) => {
    _data = order === 'dsc' ? _data.reverse() : _data
    
    return _data.slice(from, to)
      .map((item, idx) => {
      item['index'] = idx
      return item
    })
  }
}
