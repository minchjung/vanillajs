
export const pageApiHandler = async ({ page, size }) => {
  let query = `/page/?` 
  query += page && size 
    ? `page=${page}&size=${size}`: page 
    ? `page=${page}` : `size=${size}`

  return await fetch(query, {
    method : 'get',
  })
  .then(result => result.json())
}