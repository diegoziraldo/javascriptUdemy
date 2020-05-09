$(document).ready(function () {

    $('#mostrar').hide();
    let caja = $('#caja');

    //Aqui estamos capturando el elemento con el Id "mostrar", 
    //al que le daremos un evento, y cuando este evento se ejecute,
    //entrara a la funcion para y se ejecutara lo hay adentro 
    $('#mostrar').click(function(){
        //Aqui le estamos diciendo al elemento que al hacer click en el boton "mostrar",
        //se ejecute la funcion, entonces lo primero que tiene la funcion es hacer que,
        //el boton apretado se haga invisible
        $(this).hide()

        //Cuando el programa llegue a esta parte de la funcion,
        //va a capturar el elemento con el id 'ocultar',
        //y le va a asisgnar el evento show(), el cual me va a mostrar dicho elemento
        $('#ocultar').show();

        //En esta funcion estamos capturando el elemento con Id "caja",
        //este evento nos sirve para ver los elementos en el DOM
        
        //a este evento le podemos poner como parametros la velocidad,
        //que quiero que me muestre el elemento
        //$('#caja').show(100);
        
        $(caja).fadeIn('normal');
    })

    $('#ocultar').click(function(){
        //Aqui le estamos diciendo al elemento que al hacer click en el boton "ocultar",
        //se ejecute la funcion, entonces lo primero que tiene la funcion es hacer que,
        
        //el boton apretado se haga invisible
        $(this).hide();

        //Cuando el programa llegue a esta parte de la funcion,
        //va a capturar el elemento con el id 'mostrar',
        //y le va a asisgnar el evento show(), el cual me va a mostrar dicho elemento
        $('#mostrar').show();

        //En esta funcion estamos capturando el elemento con Id "caja",
        //este evento nos sirve para borrar los elementos en el DOM
        //a este evento le podemos poner como parametros la velocidad,
        //que quiero que me muestre el elemento
        //$('#caja').hide(100);
   
        $('#caja').fadeOut('slow')
    })

    $('#todoEnUno').click(function(){
        caja.toggle('fast');

    });

    //Efectos personalizados

    //Aqui estamos llamando al elemento con el nombre del Id, 
    //y le estamos añadiendo una funcion cuando pase el mouse por arriba
    $('#animar').mouseover(function(){
        //Aqui estamos usando la variable donde fue guardado el llamado del ID,
        //esto lo hacemos para mejorar el rendimiento del programa
        //Esta animacion la vamos a generar mediante un elemento Json
        caja.animate({
            marginLeft: '10px'}
            ,100),
            //Aqui estamos haciendo que el programa luego de haber ejecutado las lineas anteriores,
            //ejecute estas lineas
        caja.animate({
            marginLeft: '30px'}
            ,100)
    })



    















});