const template = (contents, state) => `
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
      <div id="root">
        ${contents}
      </div>
      <script src="./build/bundle.js"></script>
    </body>
  </html>
`;

export default template