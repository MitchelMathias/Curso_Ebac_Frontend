document.addEventListener('DOMContentLoaded', () =>{
    fetch('http://localhost:3000/teste', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            nome: "Mitchel",
            idade: 25
        })
    })
    .then(res => res.json())
    .then(dados =>{
        document.getElementById('resposta').innerHTML = `<h4>${dados.idade}</h4>`
    })
})
