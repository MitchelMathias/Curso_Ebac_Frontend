$(document).ready(function(){
    $('section.texto').hide()
    $("#remover").on('click',function(){
        $("section.texto").fadeOut()
    })
    
    $('#aparecer').on('click',function(){
        $('#texto').fadeIn()
    })
    
    $('button').eq(1).on('click', function(){
        let $link = $('input').eq(0)
        let $img = `<div><img src="${$link.val()}" alt = "Inserido pelo usuário"></div>`
        $('section.imagem article').append($img)
        $link.val('')
        $link.focus()
    })
})