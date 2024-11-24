document.getElementById('ouvinte').addEventListener('submit', adicionar);

let inseridos = document.getElementById('dados')
let notas = []
let soma = 0

function adicionar(e){
    e.preventDefault()

    let atv = document.getElementById('atividade')
    let nota = parseFloat(document.getElementById('nota').value)
    let emoji = nota >= 6 
        ? '<img src="img/aprovado.png" alt="Emoji Feliz"> ' 
        : '<img src="img/reprovado.png" alt="Emoji triste">'

    let linha =`<tr>
                    <td>${atv.value}</td>
                    <td>${nota}</td>
                    <td>${emoji}</td>
                </tr>`

    inseridos.innerHTML += linha

    media(nota)
}

function media(nota){
    let mostrarMedia = document.getElementById('media')
    let situacao = document.createElement('span')

    notas.push(nota)
    soma += nota
    let mediaGeral = soma / notas.length

    if (mediaGeral >= 6){
        situacao.className = 'resultado aprovado'
        situacao.textContent = 'Aprovado'
    }
    else{
        situacao.className = 'resultado reprovado'
        situacao.textContent = 'Reprovado'
    }

    let tfood = `<tr> 
                    <td>Média Geral</td>
                    <td>${mediaGeral.toFixed(2)}</td>
                    <td>${situacao.outerHTML}</td>              
                </tr>`

    mostrarMedia.innerHTML = tfood
}
