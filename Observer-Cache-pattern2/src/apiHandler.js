export const getCache = async () => {

  return await fetch('/api/cache', {
    method: 'get',
    headers: { 'content-type': 'application/json' },
  })
  .then(result => result.json())
  
}