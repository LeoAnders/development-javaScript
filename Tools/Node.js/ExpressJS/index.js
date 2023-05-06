
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

let alunos = [{id: 0,nome: "jose"},
   {id: 1, nome: "Maria"},
   {id: 2, nome: "Leonardo"},
   {id: 3, nome: "Joaquina"}]

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res)=> {
   res.send("Hello world")
})

app.get("/alunos", (req, res)=>{
   

   res.json(JSON.stringify(alunos))
})

app.get("/aluno/:id", (req, res)=>{
   console.log(req.body);
   let aluno = alunos[req.body.id]
   res.json(aluno)

})


const PORT = 3000;
app.listen(PORT, ()=>{
   console.log(`Server running on Port ${PORT}`);
})
