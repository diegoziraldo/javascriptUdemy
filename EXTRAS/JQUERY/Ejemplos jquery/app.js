$(document).ready(function () {
    
    //Aqui estamos llamando a la etiqueta '<h1>',
    //para cambiarle el texto que tiene adentro mediando la propiedad .html,
    //y en los parentesis le pondremos lo que queremos,
    //esto reemplazaria el innerHTML
    
    //Seleccion mediante una etiqueta
    /* $('h1').html('hola') */
    
    //Seleccion mediante una clase
    /* $('.display-4').html('desde clase') */

    //Seleccion mediante un Id
    /* $('#idh1').html('desde Id') */

    /* $('h1').addClass('diaplay-4');
    $('h2').removeClass('text-center'); */

/* 
    $('#idh1').addClass('text-danger');
    $('#idh1').removeClass('display-4');

    $('#contenido').append('<h2>Este es un elemento al final</h2>');
    $('#contenido').prepend('<h2>Este es un elemento al principio</h2>');

    $('#colorAzul').css({   
        'color':'blue', 
        'background':'salmon',
        'padding':'20px'
    });

    //Con la propiedad 'remove()', 
    //vamos a borrar directamente el elemento
    $('#colorAzul').remove();
    //Con la propiedad 'hide()', 
    //vamos a ocultar el elemento
    //$('#colorAzul').hide();

    $('img').attr('src', 'https://codeorigin.jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-in-action.jpg');
    $('img:last').attr('width','100px');
 */
/* 
//Aqui estamos guardando en la variable parrafo,
//el elemento '<p>', del Id resultado
var parrafo = $('#resultado p')

//Aqui le estamos dando un evento,
//a la propiedad que tiene la clase 'btn btn-primary'

//Aqui estamos agregando la clase mediante 'addClass()'
$('.btn-primary').click(function(){
    parrafo.addClass('display-4');
})

//Aqui estamos sacando la clase mediante 'removeClass()'
$('.btn-danger').click(function(){
    parrafo.removeClass('display-4');
})

//Aqui estamos agregando y sacando la clase,
//mediante 'toggleClass()'
$('.btn-warning').click(function(){
    parrafo.toggleClass('display-4');
}) */

/* 
//Aqui estamos declarando las variables
var input = $('#nombre');
var contenido = $('#contenido');

//evento keyup
//con el evento 'keyup()', vamos a capturar el valor,
//de la tecla apretada en el teclado
input.keyup(function(){ 
    //console.log(input.val())
    //Aqui vamos a cargarle al elemento del id 'contenido',
    //el valor que tendremos en el input
    contenido.html(input.val());

    //Con este condicional vamos a chequear,
    //si el input esta vacio que se escriba,
    //dentro del elemento, lo que pondremos en los parentesis
    if(input.val() === ''){
        contenido.html('Estoy esperando...');
    }
});
*/
/* 
    //Aqui estamos trayendo el Id 'formulario',
    //al cual le estamos cargando el evento 'submit',
    $('#formulario').submit(function(e){

    //con la funcion preventDefault(), 
    //lo que logramos,
    //s prevenir el comportamiento por defecto de un evento
    e.preventDefault();
    //console.log('click');

    //Aca estamos guardando el valor de un input en una variable
    var nombre = $('#nombre').val();
        console.log(nombre);

})
 */
var resultado = $('#resultado');

$('.btn-primary').click(function(){
    //resultado.hide(200);
    //resultado.fadeIn(500);
    resultado.animate({
        left:'100px',
        opacity:'0.3',
        height:'+=150px',
        width:'+=250px'
    },200,function(){
        resultado.animate({
            left:'10px',
            opacity:'1',
            height:'+=150px',
            width:'+=250px'
    },100)
 })

$('.btn-danger').click(function(){
    //resultado.show(200);
    //resultado.fadeOut(500);
    //resultado.animate({right:'-100px'})
})
})
/* $('.btn-warning').click(function(){
    resultado.toggle(1000);
})  */

})