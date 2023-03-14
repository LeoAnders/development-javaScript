//Supondo que a população de [um país] A [seja da ordem de 80000 habitantes]
//[com uma taxa anual de crescimento de 3%] e que a [população de B seja 200000 habitantes]
//[com uma taxa de crescimento de 1.5%.] Faça um programa [que calcule e escreva o número]
//[de anos necessários para que a população do país A ultrapasse ou iguale] a população do país B,
//mantidas as taxas de crescimento.

let populationA = 80000
let growthRateA = 0.03 //taxa anual de crescimento 3%

let populationB = 200000
let growthRateB = 0.015 //taxa de crescimento de 1.5%.

let year = 0

while(populationA < populationB){

//multiplicaremos a população do ano anterior pela taxa de crescimento acrescida de 1

    populationA = populationA * (1 + growthRateA) //80000 * (1 + 0.03) = 824000
    populationB = populationB * (1 + growthRateB) //20000 * (1 + 0.015) = 20300
    year++

    if(populationA >= populationB ){

        console.log(`Em aproximadamente ${year} anos a População "A" chegara a se igualar ou ultrapassara a população B`)

    }

}



    
    



