
// export const pageApiHandler = async ({ page, size }) => {
//   let query = `/page/?` 
//   query += page && size 
//     ? `page=${page}&size=${size}`: page 
//     ? `page=${page}` : `size=${size}`

//   return await fetch(query, {
//     method : 'get',
//   })
//   .then(result => result.json())
// }

export const getDataApiHandler = async ({ search, order, total, name }) => {
  let query = `/api/data?search=${search}&order=${order}&total=${total}&name=${name}`
  // console.log(query)

  return await fetch(query,{
    method : 'get',
    headers : { 'Content-type' : 'application/json' }
  })

}

export const getDataByIndex = async ({ size, group })=> {
  let query = `/api/page?size=${Number(size)}&group=${Number(group)+1}`

  return await fetch(query, {
    method : 'get',
    headers : { 'Content-type' : 'application/json' }
  })
  .then(result => result.json())
}

export const cachingCheckHandler = ({ search, order, total, name }) => {
  const cacheId = window.localStorage.getItem('id')
  const curId = search + order + String(total) + name
  return cacheId === curId
}