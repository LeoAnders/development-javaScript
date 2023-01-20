//Create promise

let promise = new Promise((resolve, reject) => {
  let nome = "Leonardo"

if(nome == 'Leonardo'){
resolve('Usuário Leonardo foi encontrado!');

  }else{
reject('O usuário Leonardo nao foi encontrado!');
  }

})

//data(dados) significa que estou esperando dados
promise.then((data)=> {
console.log(data)

})

//Chaining of Then's
let promise2 = new Promise((resolve, reject) => {
  let nome = "Leonardo"

  if (nome == 'Leonardo') {
resolve('Usuário Leonardo foi encontrado!');
  } else {
reject('O usuário Leonardo nao foi encontrado!');
  }


promise2
  .then((data) => {
      return data.toLowerCase()
  })
  .then((stringModificada) => {
      console.log(stringModificada);
  })

})

  //Catch return

  let promise3 = new Promise((resolve, reject) => {
    let nome = "Andrey"

    if (nome == 'Leonardo') {
    resolve('Usuário Leonardo foi encontrado!');
    } else {
   reject('O usuário Leonardo nao foi encontrado!');
    }


})

promise3
    .then((data) => {
        console.log(data);
    }).catch((erro) => {
        console.log('Aconteceu um erro: ' + erro);


    })


    let p1 = new Promise((resolve, reject) => {

      setTimeout(() =>{
          resolve("p1 ok! timeout")
  
      },2000 )
  
  })
  
  let p2 = new Promise((resolve, reject) => {
      resolve("p2 ok!")
  
  })
  
  let p3 = new Promise((resolve, reject) => {
      resolve("p3 ok!")
  
  })
  
  let resolveAll = Promise.all([p1, p2, p3]).then((data) => {
      console.log(data)
  })