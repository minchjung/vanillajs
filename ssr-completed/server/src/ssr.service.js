const { SSR } = require('../public/ssr.js')

const getStringHtml = async (context) => {
  const { state } = context
  // console.log(context)
  // console.log(SSR.ssr_converter(context))
  const ssrRendered = await SSR.ssr_converter(context).then(result)
  const result = template(state, ssrRendered);
  // console.log(result)
  // console.log(typeof result)
  
  return !result 
    ? 'nothing to rend'
    : result
}


const template = (state, ssr_html) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script>window.state=${JSON.stringify(state)}</script>
</head>
<body>
  <div id='root'>
    ${ssr_html} 
  </div>
  <script src="./csr.js"></script>
</body>
</html>
  `
}

module.exports = getStringHtml
