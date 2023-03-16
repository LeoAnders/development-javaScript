//Crie uma função que recebe um array de 2 números
//e coloque eles em ordem crescente. Não use o método sort.



function twoNumbers(array){


  if(array.length !== 2){
    console.log("Apenas sao permitidos dois números no array");
  }

 //se o primeiro numero for maior que o segundo 
 if(array[0] > array[1]){

  //nova variável para armazenar o valor dos números crescentes
  let newArray = array[0]
  array[0] = array[1]
  array[1] = newArray

 }

 return array


}

let num = [9,2]
let sortedArray = twoNumbers(num)
console.log(sortedArray);


//agora com método sort()

let arrays = [9,5,4,3,1]
arrays.sort()
console.log(arrays);
