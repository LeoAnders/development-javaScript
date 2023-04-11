function tratarErro(error){
  throw{
    nome: error.name,
    msg: error.msg,
    date: new date()
  }

}

function imprimirNomeGrito(obj){
  //tratamento de erro
  try{
 console.log(obj.name.toUpperCase() + "!!!");
  }catch(e){
    tratarErro(e)
  }
 
}

const obj = {name:"Leonardo"}
imprimirNomeGrito(obj)