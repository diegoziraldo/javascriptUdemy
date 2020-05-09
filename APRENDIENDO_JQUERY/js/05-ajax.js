$(document).ready(function () {
    let datos = $('#datos');
    /*     
    

    //Metodo Load - Ajax

    //Aqui estamos llamando a un documento html desde el metodo get,
    //de la pagina web que le pasamos por parametros
    $('#datos').load('https://reqres.in/')


    //Metodo Get
    //https://www.youtube.com/watch?v=JFjQRY3YNXs

    //Aqui estamos usando el metodo get el cual tiene dos parametros,
    //el primero es la ruta donde se encuentra el archivo,
    //el segundo es la funcion donde se guardara el el dato que nos trajo el metodo '.get'
    $.get('./02-evento.html', function(data){
        //Aqui estamos mostrando como texto el contenido que nos devuelve el metodo get,
        //aqui lo estaremos mostrando dentro de el elemento con el id 'datos'.
        $('#datos').text(data)
    })



*/

    //Metodo Post



    $('#formulario').submit(function(e){
        e.preventDefault();
    //Aqui estamos creando un Json el cual lo mandaremos con el metodo POST
    let usuario = {
        Nombre:$('input[name="nombre"]').val(),
        Apellido:$('input[surname="apellido"]').val(),
        Edad: $('input[age="edad"]').val()
    }
    console.log(usuario);
    //Aqui estamos usando el metodo POST, al cual le pasaremos en el primer parametro, 
    //la url donde vamos a mandar el JSON, en el primer parametro estamos llamando desde el Id,
    //a dicho elemento y usaremos el valor del atributo 'action' donde estara su url
    //el segundo parametro va a ser el Json que creamos,
    //el tercer parametro va a ser la funcion que nos devolvera la respuesta del elemento enviado
/*     $.post($(this).attr('action'), usuario, function(data){
        console.log(data);

        //Aqui vamos a ingresar dentro del div seleccionado todo lo que nos devuelva la respuesta del metodo POST
        datos.text(`El nombre es: ${data.Nombre} El apellido es: ${data.Apellido}`);

        //Con esta propiedad vamos a confirmar si la respuesta fue exitosa, 
        //ya que es lo que se ejecutara ni bien termine de devolvernos la peticion
        }).done(function(){
            alert('El usuario se guardo correctamente')
    })
    })
 */
    //Aqui estamos haciendo una peticion Ajax
    $.ajax({
        //Aqui estamos indicandole a la peticion el metodo de envio que mandaremos
        type: 'POST',
        //Aqui le estamos enviando la url a la que queremos enviar los datos
        url: $(this).attr('action'),
        //Aqui le enviaremos el objeto Json que tendra todos los datos del objeto
        data: usuario,
        //Una ves que se envie el objeto al servido se ejecutara la propiedad 'beforeSend',
        //la cual nos avisara lo que esta pasando antes que nos envie la respuesta
        beforeSend: function(){
            console.log('Enviando Usuario...');
        },
        //Cuando el servido nos devuelva la respuesta se activara la propiedad 'success',
        //la cual nos mostrara la respuesta de la peticion
        success: function(response){
            console.log(response)
        },
        //Una ves que enviemos la peticion, el servidor nos dira si hubo un error o se pudo realizar la peticion,
        //si hubo un error se activara la propiedad 'error'
        error: function(){
            console.log('A ocurrido un error')
        },
        timeout:2000
    })


})
});