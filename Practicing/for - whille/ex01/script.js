
function btnResult(){

  let nota = parseInt(document.querySelector("#inputNota").value)
  let result = document.querySelector("#result")


  if(nota >=0 && nota <=10){

    result.innerHTML = `O valor ${nota} esta correto `

  }

  
  while(nota <0 || nota >10){
    result.innerHTML = `O valor ${nota} esta Incorreto `
    break
  }


}