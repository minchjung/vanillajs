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


export const  getData = (from, to) => setData(600).slice(from,to) 
export const getTotalData = () => setData(600)