import express from "express";
import { ServerRenderer } from "./serverRenderer.js";

const app = express(); 
const PORT = 4000;

app.use(express.json());
app.use("/dist", express.static("./dist"))

app.get("/",(req, res) => {
  res.send(ServerRenderer())
})

app.listen(PORT, ()=>{
  console.log(`SERVER ON : http://localhost:${PORT}`)
})