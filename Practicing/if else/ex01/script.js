


function verificadorBtn(){
  const inputTxt = document.querySelector('#inputTxt')
  const resultado = document.querySelector('#res')

  const letra = inputTxt.value
  const vogais = ["a","e","i","o","u"]

  //includes() verifica se a letra fornecida esta presente no array de vogais 
  if(vogais.includes(letra.toLowerCase())){

    resultado.innerHTML = `A letra ${letra} e uma vogal`

  }else{

    resultado.innerHTML = `A letra ${letra} e uma consoante`
  }

}