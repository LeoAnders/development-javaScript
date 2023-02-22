
function btnCalcule(){

 let nota1 = parseFloat(document.querySelector('#nota1').value)
 let nota2 = parseFloat(document.querySelector('#nota2').value)
 let nota3 = parseFloat(document.querySelector('#nota3').value)
 let resultado = document.querySelector('#res')

 let media = (nota1 + nota2 + nota3)/3;
 
  if(media >= 7 ) {

    resultado.innerHTML = `Sua media é ${media} voce foi Aprovado `

  }else{

      resultado.innerHTML = `Sua media é ${media} voce foi Reprovado `
    
  }
}