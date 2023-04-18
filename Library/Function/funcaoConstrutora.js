
function carro(velocidadeMaxima = 200, delta =5){
   //atributo privado
   let velocidadeAtual = 0

   //método publico
   
   //método publico
   this.acelerar = function () {
      if (velocidadeAtual + delta <=velocidadeMaxima) {
         velocidadeAtual += delta
         
      }else{
         velocidadeAtual = velocidadeMaxima
      }
   }

   //método Publico
   this.getVelocidadeAtual = function() {
      return velocidadeAtual
      
   }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const mercedes = new carro(350, 20)
mercedes.acelerar()
mercedes.acelerar()
mercedes.acelerar()
mercedes.acelerar()

console.log(mercedes.getVelocidadeAtual());