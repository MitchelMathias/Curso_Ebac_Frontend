document.getElementById('ouvinte').addEventListener('submit', evento)

let nomes = []
let numeros = []

function evento(e){
    e.preventDefault()

    analisar()
}

function analisar(){
    let num = document.getElementById('numero').value
    let nome = document.getElementById('nome').value

    if (numeros.includes(num) || nomes.includes(nome)){
        alert('Ja temos um contato com esses dados...')
    }
    else{
        numeros.push(num)
        nomes.push(nome)
        mostrar(nome, num)
    }
}

function mostrar(nome,num){
    let mostrar = document.getElementById('resposta')
    let dados = ''

    dados +=`<tr>
                <td>${nome}</td>
                <td>${num}</td>
            </tr>`

    mostrar.innerHTML += dados

    total()
}

function total(){
    let tot = document.getElementById('total')

    let retorno = ''

    retorno+=`<tr>
                <td class = "teste">Total Cadastrado:  ${numeros.length}</td>
            </tr>`

    tot.innerHTML = retorno
    
}