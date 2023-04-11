function exibir (num){
  console.log("The operation result in: " + num);
}


function soma(a, b, callback){
  let valor = a + b;
  callback(valor)
}

function multiplicacao(a, b, callback){
  let valor = a * b; 
  callback(valor)
}

soma(4, 4, exibir)
multiplicacao(2, 2, exibir)