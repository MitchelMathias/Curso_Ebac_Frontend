/*$(document).ready(function() {
    if (!interval) { // == if (interval == false || interval == 0 || interval == '' || interval == null || interval == undefined || isNaN(interval))
        interval = setInterval(teste, 1000); 
    }
});

let fotos = $('.carousel img');
let ini = 0;
let interval;

function teste() {
    fotos.hide();  
    fotos.eq(ini).show();  

    ini++; 
    if (ini === fotos.length) {
        ini = 0;  
    }
}*/

$(document).ready(function(){
    $('.carousel').slick({
        autoplay:true,
        autoplaySpeed:1000,
        infinite: true,
    })

    $('.menu_hamburguer').on('click', function(){
        $('nav').slideToggle()
    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder:'(__) _____-____',
    })

    $('form').validate({
        rules:{
            nome:{
                required:true,
            },
            email:{
                required: true,
                email:true,
            },
            tel:{
                required:true,
            }
        },
        messages:{
            nome:'Digite seu nome'
        },
        submitHandler: function(form){
            alert('Deu certo')
        },
        invalidHandler: function(){
            alert('Erro nos campos')
        }
    })

    $('.destaque button').on('click', function(){
        const h3 = $(this).parent().find('h3').text()

        $('html').animate({
            scrollTop: $('.contato').offset().top
        })

        $('#veiculo').val(h3)
    })
})


