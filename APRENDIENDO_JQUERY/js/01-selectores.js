'use strict'
$(document).ready(()=>{
    
    //Selectores Id

    $('#rojo').css({
    'background':'red',
    'color':'white'
    });

    $('#amarillo').css({
    'background':'yellow',
    'color':'black'
    });

    $('#verde').css({
    'background':'green',
    'color':'white'
    });
    /* console.log(rojo) */
    //Selectores Class

    //Aqui estamos trayendo una clase del DOM,
    //al cual le agregaremos un estilo css
    $('.zebra')
        .css({
            'padding':'2px'

        })
    //Aqui estamos trayendo una clase del DOM,
    //al cual le pondremos un evento, este evento va a ser que,
    //cuando se haga un click en el elemento,
    //este elemento incorporara una clase de otro elemento


    $('.sinBorde').click(function(){
        $(this).addClass('zebra');
    })
    /* $('.sinBorde').click(()=>{
        $('.sinBorde').addClass('zebra');
    }) */


    //Selectores de etiqueta

    var parrafos = $('p');

    parrafos.click(function(){
        $(this).removeClass('zebra');
    })
  
    //Selectores de atributo
    //Aqui estamos seleccionando todos los elementos,
    //que su atributo sea igual al que le estamos pasando,
    //en este caso seria (title="you Tube")
    $('[title="you Tube"]').css('color','green')
    $('[title="clarin"]').mouseover(function(){
        $(this).html('Clarin Miente');
    })

    //Otro

    $('a').addClass('margenSuperior')














})