import { ComponentCompiler } from './component/Compiler.js'

export const serverRenderer = (state) => {

  return Template(
    Object.values(ComponentCompiler(state)).map(
        component => component.template()
      ).join(""), 
    state )
}


export const Template =(contents, state) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>SSRCSR</title>
      <script>window.state=${ JSON.stringify(state) } </script>
    </head>
    <body>
      <div id="root">${contents}</div>
      <script src="./src/client.js" type="module"></script>
    </body>
  </html>
`;