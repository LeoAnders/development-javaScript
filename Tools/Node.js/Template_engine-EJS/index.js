
const express = require("express");
const fs = require("fs");
const app = express();

let user = {
  id: 0,
  name:"Leonardo",
  phone:"(99)99999-9999"
}

//funcao de loop do meu objeto que busca la no meu template essas chaves se essas chaves existirem la eu vou substituir pelo valor do meu objeto
function render(data, obj){

for (let key in obj) {
  data = data.replace(`{{{${key}}}}`, obj[key]);
}

return data 

}

app.get("/", (req, res)=>{

  fs.readFile("./templates/user.html", "UTF8", (err, data )=>{
    if (!err) {

      res.send(render(data, user))

    }
    
  })

})

app.listen(3000, ()=>{
  console.log("Server running on 3000");
})