
export const apiFilter = {

  filterByKeyWord : (keyword, data) => {
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
  
  filterByName : (name, data) => {
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

}