//Escreva um script que pergunta ao usuário se ele deseja converter
//uma temperatura de grau Celsius para Fahrenheit ou vice-versa.Para cada opção, 
//crie uma função. Crie uma terceira, que é um menu para o usuário escolher 
//a opção desejada, onde esse menu chama a função de conversão correta.

function numberConverter(){
  
  let CeToFa = document.querySelector("#CeToFa")
  let FaToCe = document.querySelector("#FaToCe")

  let inputNumber = Number(document.querySelector("#inputNumber").value)
  let conversationResult = document.querySelector("#result")

  if(CeToFa.checked){
    //converter Celsius para Fahrenheit
    let result = (inputNumber * 9/5)+32

    conversationResult.innerHTML = `Sua conversão de ${inputNumber}ºC é de ${result.toFixed(2)}ºF`

  

  } else if(FaToCe.cheked){     
    //converter Fahrenheit para Celsius
    result = (inputNumber - 32)* 5/9

    conversationResult.innerHTML = `Sua conversão de ${inputNumber}ºF é de ${result.toFixed(2)}ºC`
  
  }else {

    conversationResult.innerHTML = "Selecione a opção para conversão"
    
  }
  
  
}