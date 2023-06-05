
const PORT = 3000
const express = require("express");
const path = require("path");

const app  = express()

app.use(express.static(path.join(__dirname, "client")))

app.listen(3000,()=> {
  console.log(`Starting server on port${PORT}`);
})



