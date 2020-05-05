$(document).ready(function () {
    
reloadLinks();

    let url = 'https://';

    //Aqui lo que estamos haciendo es eliminando un atributo al enlace que vamos a crear
    

    //Aqui estamos capturando en elemento con id "add_button", 
    //al cual le agregaremos un evento llamado click
    $('#add_button')
                    //Aqui estamos sacandoles atributos a la etiqueta mediante en evento 'disabled'
                    .removeAttr('disabled')                    
                    .click(function(){
                               
        //Cuando se haga click se va a ejecutar esta funcion, 
        //la cual mostrara por consola en valor que tenga en ese momento el elemento con el id "add-link"
        //console.log($('#add-link').val());

        //Aqui lo que hacemos es capturar el id donde tenemos nuestra lista,
        //a la cual le cargaremos el valor del input
        $('#listaEnlaces').append('<li><a href="'+ url +$("#add-link").val()+'"</a></li>');
        $('#add-link').val('');
        
        reloadLinks();
    })


function reloadLinks(){
    //Aqui estamos recorriendo todas las etiquetas <a>, que tendremos en el DOM 
    $('a').each(function(index){
        //console.log(this);

        //Aqui estamos accediendo al atributo "href", el cual lo mostraremos por consola
        //console.log($(this).attr("href"));

        //Aqui estamos accediendo al atributo "href", el cual guardaremos en la variable "enlace"
        let enlace = $(this).attr("href");
        //Aqui llamaremos a la variable "enlace", el cual tendra cargado el valor del atributo
        //entonces este valor se lo cargaremos al enlace correspondiente 
        $(this).text(enlace)

        //Aqui lo que estamos haciendo es agregarle un atributo al enlace que vamos a crear
        $(this).attr('target', '_blank');


    })

}







});