
//Grava um dado na memoria do navegador, para poder usar esse dado depois
//localStorage.setItem()

//para usar o dado escrito pelo setItem eu utilizo o getItem
//localStorage.getItem()

//ele vai na memoria do navegador, e apaga esse dado e passa a nao ter mais acesso
//localStorage.removeItem()


onload = function(){
  let user = localStorage.getItem("user")
  let h1 = document.querySelector("#user")
  h1.innerHTML = user

}  


function update(element){

  let value = element.value ;
  console.log(value);

  let h1 = document.querySelector("#user")
  h1.innerHTML = value

  localStorage.setItem("user", value)


}