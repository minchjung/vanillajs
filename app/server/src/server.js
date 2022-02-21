import express from "express";
import path from "path";
import controller from './controller.js'
// import router from "./router.js";

const app = express(); 
const router =express.Router();
const PORT = 4000;

router.get('/', controller.serverRenderer)
router.get('/api/cache', controller.updateCache) 
router.put('/api/state', controller.updateState)

app.use(express.json());
app.use(express.static( path.resolve(__dirname,'build')),"utf-8")
// app.get('/', (req, res)=> {
//   console.log("")
//   res.send("ok")
// })
app.use('/',router)

app.get('/favicon.icon', (req,res)=> res.status(204).end())
app.listen(PORT, ()=>{
  console.log(`SERVER ON : http://localhost:${PORT}`)
})

export default app;