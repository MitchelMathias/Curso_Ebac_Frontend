document.addEventListener('DOMContentLoaded', ()=>{
    fetch('http://localhost:3000/t', {
        method: 'post',
        headers: {'content-type':'application/json'},
        body:JSON.stringify({
            nome:"Yohan",
            idade: 27,
        })
    }).then(res => res.json()).then(dados => {
        document.getElementById('resposta').innerText = JSON.stringify(dados)
    })
})