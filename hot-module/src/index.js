import express from "express";
import router from "./router";

const app = express(); 
const PORT = 4000;


app.use(express.json());
// app.use("/src", express.static("./src"))
app.use('/', router)

app.listen(PORT, ()=>{
  console.log(`SERVER ON : http://localhost:${PORT}`)
})


export default app;