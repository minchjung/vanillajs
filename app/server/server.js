const express = require('express');
const fs = require('fs');
const path = require('path')

const app = express(); 
const PORT = 3001;

app.use(express.static(path.resolve(__dirname, 'public')))
app.get('/', async (req, res) => {

  const result = await fs.readFileSync(
    path.resolve(__dirname, 'public/ssr-index.html'), "utf-8" 
  )
  console.log(result);
  res.send("you ok")  
})
app.listen(PORT, ()=> {
  console.log("server listning by Port= "+PORT)
})