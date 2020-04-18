$(document).ready(function empezar () {
    
    //MouseOver // MouseOut

     var caja = $('.formas');

/*  caja.mouseover(function cambiaVerde() { 
        caja.css('background','green')
    });
    caja.mouseout(function cambiaRojo() { 
        caja.css('background','red')
    });
    caja.click(function () { 
        caja.css('background','yellow') */
 
    //Hover

     /*function cambiaRojo() { 
        caja.css('background','red')
    }

    function cambiaVerde() { 
        caja.css('background','green')
    } */
/* 
repetir()

function repetir(){
    caja.click(function (e) { 
        //e.preventDefault(); 
        caja.css('font-size','30px')
        caja.removeClass('formas')
        caja.removeClass('circulo')
        caja.addClass('caja')
        caja.html('<p>Soy un cuadrado</p>')

    .click(function (e) { 
        //e.preventDefault();         
        caja.css('font-size','40px')
        caja.removeClass('caja')
        caja.addClass('rectangulo')
        caja.html('<p>Soy un rectangulo</p>')

    .click(function(e){

        caja.css('font-size','40px')
        caja.removeClass('rectangulo')
        caja.addClass('circulo')
        caja.html('<p>Soy un circulo</p>')
        caja.off()
        repetir()
        //Click - DobleClick

        caja.dblclick(function(){
            $('this').css('color','white')
        })

        
    })
   })
});
}
 */
/* caja.hover(cambiaRojo, cambiaVerde) */
    
    //Focus y Blur

    var nombre = $('#nombre');
    var datos = $('#datos');
    //Con la propiedad 'focus', 
    //hacemos que lo que estemos seleccionando,
    //reciba la funcion que estamos mandando 
    nombre.focus(function(){
        $(this).css('border','2px solid green ')
    })

    //Con la propiedad 'blur', vamos a logra que,
    //cuando seleccionemos afuera de donde tenemos la propiedad,
    //'focus', se active la propiedad 'blur'
    nombre.blur(function(){
        $(this).css('border','1px solid black ')
     
        //Aqui estamos guardando en una variable los datos que tiene el input
        $(this).val();
        //Con la propiedad 'text', 
        //vamos a convertir todo lo que tengamos,
        //dentro del elemento input a texto
        
        //Con la propiedad 'show', 
        //podremos ver el div,
        //en el caso que este con el display 'none'
        $('#datos').text($(this).val()).show();
        //
    })


    //Mouseup y mouseup

    datos.mousedown(function () { 
        $(this).css('border-color','red')
    });
    datos.mouseup(function () { 
        $(this).css('border-color','black')
    });

    $(document).mousemove(function(){
        console.log(event.clientX)
        console.log(event.clientY)
        $('#sigueme').mouseleave(function(){
            $('#sigueme').css('left',event.clientX)
            $('#sigueme').css('top',event.clientY)
        
        
        })
    })














    

    




});
