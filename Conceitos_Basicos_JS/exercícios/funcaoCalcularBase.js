console.log('========== Calculando Área ==========')

let base = 5
let altura = 10

function calculaArea(base = 0, altura = 0){
    let resp = base * altura
    return console.log(`A área é de ${resp}!!`)
}

calculaArea(base, altura)