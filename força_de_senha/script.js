$(function(){
    $('#senha').on('keyup', function(){
        
        var txt = $(this).val();
        var forca = 0;

        if(txt.length > 6) {
            forca += 25;
        }

        var reg = new RegExp(/[a-z]/i)//letra de a ate z
        if(reg.test(txt)) {
            forca += 25;
        }

        var reg = new RegExp(/[0-9]/i) // numero de 0 a 9
        if(reg.test(txt)) {
            forca += 25;
        }

        var reg = new RegExp(/[^a-z0-9]/i)//caractere especial excluindo numeros e letras
        if(reg.test(txt)) {
            forca += 25;
        }

        if(forca >= 75) {
            var aceita = 'Aceita';
        } else {
            var aceita = 'Não aceita'
        }
        $('#forca').html('Força: ' +forca + ' - ' + aceita)
    })
})