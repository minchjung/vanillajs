const express = require('express')
const app = express(); 
const axios = require('axios')
app.get('/', async (req,res)=>{
  console.log(req)
  const result = await axios.get('http://localhost:4000')

  console.log(result)
  res.send("ok")
})
app.get('/favicon.icon', (req,res)=> res.status(204).end())
app.listen(4001, ()=>{
  console.log(`SERVER ON : http://localhost:${4001}`)
})