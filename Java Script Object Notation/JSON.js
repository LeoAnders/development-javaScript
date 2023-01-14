
let a = {
  nome:"Leonardo",
  nota: 9
}

let b = JSON.stringify(a)

console.log(b);

let a2 = '{"nome":"Leonardo", "nota":8}'

let b2 = JSON.parse(a2);
console.log(b2);

