$(function(){
   
    var horaescolhaCampo;

    $('input').on('focus', function(){
        
        var pos = $(this).offset();
        var width = $(this).width();

        $('.horaescolha').css('left', pos.left + width + 8)
        $('.horaescolha').css('top', pos.top)
        $('.horaescolha').show();

        horaescolhaCampo = $(this);

    });

    $('input').on('blur', function(){
        setTimeout(function(){
            $('.horaescolha').hide();
        }, 200);
    });

    $('.horaescolha button').on('click', function(){
         
        var hora = $(this).html();
        horaescolhaCampo.val(hora);
    })


})