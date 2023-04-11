let url ="https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"



function convert(){
  let input = document.querySelector("#value")
  let value = input.value
  console.log(value);

fetch(url).then((response)=> {

  return response.json()

})

.then((data)=>{
  
  let rate = data.rates
  document.querySelector("#result")
  .innerHTML = rate * value
})

}
