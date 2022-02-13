import express from "express";
import { Template } from "./src/template.js";
import { App, ComponentRenderer } from "./src/components/App.js";
import { postData } from "./src/res/DemoData.js";
import { store } from './src/store.js'

const app = express(); 
const PORT = 5000;
store.setState({
  data : postData,
  total : 537,
  cur : 1,
  size : 5,
  startIdx : 1, 
})

app.use(express.json());
app.use("/src", express.static("./src"))

app.put('/api/state', (req,res) => {
  store.syncFunc(req.body)
  res.status(204).end()
})

app.get("/",(req, res) => {
  res.send(Template(App(), store.state ))
})

// app.get('/:name', (req, res) => {
//   const { name } = req.params
//   store.state.demoData.filter( ele => ele.writer === name)
//   store.setState()
//   res.status(202).send("gggg")
// })


app.listen(PORT, ()=>{
  console.log(`SERVER ON : http://localhost:${PORT}`)
})

export default app;