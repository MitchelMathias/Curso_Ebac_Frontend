document.getElementById('submit').addEventListener('click', analisar);

function analisar(e){
    e.preventDefault();

    let na = document.getElementById('na')
    let nb = document.getElementById('nb')

    let mensagem = Number(nb.value) > Number(na.value) ? 'Vamos processguir' : 'Error: Campo A maior ou igual a Campo b'
    
    alert(mensagem)

    na.value = '' 
    nb.value = '' 
    na.focus()
}