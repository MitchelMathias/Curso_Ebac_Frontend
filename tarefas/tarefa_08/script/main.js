$(document).ready(function(){
    $('section.movel').hide();

    $('button').eq(0).on('click',function(){
        $('.movel').fadeIn();
    })
    $('button').eq(2).on('click',function(){
        $('.movel').fadeOut();
    })

    $('button').eq(1).on('click', adicionando);
})

function adicionando(){
    let tarefa = $('#tarefa');

    let linha = `<label for="name">
                    <input class='item' name="realizada" type="checkbox" value="marcado">
                    ${tarefa.val()}
                </label>`;

    $('section.tarefas').append(linha);

    tarefa.val('');
    tarefa.focus();  

    $('input.item').off('change').on( 'change', function() {
        if ($(this).prop('checked')) {
            $(this).closest('label').css('text-decoration', 'line-through')
        }
        else{
            $(this).closest('label').css('text-decoration', 'none')
        }
    })
}