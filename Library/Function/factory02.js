
function criarProduto(nome, preco) {
   return {
      nome,
      preco,
      desconto: 0.1
   }
   
}

console.log(criarProduto("Celular", 5200.99));
console.log(criarProduto("Notebook", 8199.99));
console.log(criarProduto("Processador", 3699.00));