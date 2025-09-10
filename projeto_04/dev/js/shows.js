addEventListener('DOMContentLoaded', function() { // carrega
    const buttons = this.document.querySelectorAll('[data-tab-button]'); //guarda todos os botões

    for (let i = 0; i<buttons.length; i++) { // percorre os botões
        buttons[i].addEventListener('click', (botao)=>{ //quando clicar no botão
            const alvo = botao.target.dataset.tabButton // pega o valor do atributo
            const aba = this.document.querySelector(`[data-tab-id=${alvo}]`) // seleciona a aba que tem o mesmo valor do atributo
            const teste = this.document.querySelector(`[data-tab-button=${alvo}]`)
            esconde_abas() // chama a função que remove a classe visivel de todas as abas
            remove_borda_buttons() // chama a função que remove a classe visivel de todas os botões
            teste.classList.add('shows__tabs__button--is-active') // adiciona a classe visivel no botão que foi selecionado
            aba.classList.add('shows__list--is-active') // adiciona a classe visivel na aba que foi selecionada
        })
    }
})

function remove_borda_buttons(){
    const botaos = this.document.querySelectorAll('[data-tab-button]'); // guarda todos os botões

    for (let i = 0; i<botaos.length; i++){
        botaos[i].classList.remove('shows__tabs__button--is-active') // remove a classe visivel de todas os botões
    }
}

function esconde_abas(){ // função
    const tabs = this.document.querySelectorAll('[data-tab-id]'); // guarda todas as abas

    for (let i = 0; i<tabs.length; i++){ // percorre as abas
        tabs[i].classList.remove('shows__list--is-active') // remove a classe visivel de todas as abas
    }
}