document.getElementById('ouvinte').addEventListener('submit', adicionar);

let notaMinima = parseFloat(prompt('Digite a Nota minima'))
let inseridos = document.getElementById('dados')
let notas = []
let atividades = []
let soma = 0

function validarNota(){
    if (isNaN(notaMinima)){
        alert('Vou considerar 6!!')
        notaMinima = 6
    }

}

function adicionar(e){
    e.preventDefault()
    
    validarNota()

    let atv = document.getElementById('atividade')
    let nota = parseFloat(document.getElementById('nota').value)
    let emoji = nota >= notaMinima 
        ? '<img src="img/aprovado.png" alt="Emoji Feliz"> ' 
        : '<img src="img/reprovado.png" alt="Emoji triste">'

    if (atividades.includes(atv.value)){
        alert(`A Atividade ${atv.value} ja inserida`)
    }

    else{
        atividades.push(atv.value)
        let linha =`<tr>
                        <td>${atv.value}</td>
                        <td>${nota}</td>
                        <td>${emoji}</td>
                    </tr>`
    
        inseridos.innerHTML += linha
    
        media(nota)
    }

}

function media(nota){
    let mostrarMedia = document.getElementById('media')
    let situacao = document.createElement('span')

    notas.push(nota)
    soma += nota
    let mediaGeral = soma / notas.length

    if (mediaGeral >= notaMinima){
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
