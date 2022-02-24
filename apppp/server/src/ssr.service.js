
const { SSR } = require('../public/ssr.js')

const getStringHtml = async (context) => {
  const result = await SSR.default(context);
  
  return !result 
    ? 'nothing to rend'
    : result
}

module.exports = getStringHtml