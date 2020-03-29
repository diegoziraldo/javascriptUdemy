'use strict'


window.addEventListener('load',()=>{




//Aqui estamos creando una variable,
//a la que le cargaremos el <form> que estamos llamando desde DOM
var formulario = document.querySelector('#formPelicula');

//Aqui le daremos a la variable cargada un evento, 
//en este caso le daremos el evento 'submit',lo que hara este evento,
//es enviar a algun lado todo el formulario que tengamos, 
//despues pondremos una funcion anonima a la que le programaremos 
//todo lo que queremos que haga el formulario enviado 
formulario.addEventListener('submit', ()=>{
    
    //En esta variable vamos a guardar el valor que tendremos adentro
    // de nuestro <input>
    var titulo = document.querySelector('#addPelicula').value;
    
    //Aqui vamos a validar un ingreso de dato, 
    //ya que si el valor ingresado tiene menos de un caracter,
    //no va a ser guardado en el localStorage
    
    if(titulo.length >= 1){
        
        /* var numeroKey  = localStorage.length+1; */
        
        /* nombre = nombre+1; */
        //Aqui vamos a crear el elemento a guardar en el localStorage,
        //al cual nombraremos al elemento con el mismo nombre que pusimos,
        //en el input, y el valor tambien recibira el mismo nombre
        localStorage.setItem(titulo, titulo);
    }
    });

    //Aqui estamos creando la variable 'ul', 
    //a la que le cargaremos la etiqueta <ul>, que creamos en el DOM
    var ul = document.querySelector('#peliculasStorage')
    
    //Aqui estamos haciendo un For in,
    //para poder ver todos los elementos cargados en el localStorage
    for(var i in localStorage){
        /* console.log(localStorage) */
        //Aqui estamos condicionando el localStorage,
        // para que solo entren datos de tipo string
        if(typeof localStorage[i]=='string'){
            //aca estamos creando la variable 'li', 
            //a la que le guardaremos una etiqueta li, '<li>'
            var li = document.createElement('li');
                //A la etiqueta 'li' le vamos a cargar adentro 
                //un string que tenemos guardado en el localStorage
                ul.append(li)
                li.append(localStorage[i])
                
            }
        }
    /* localStorage.setItem(titulo, titulo); */

    var tituloRecuperado = localStorage.getItem(titulo);
    /* console.log(tituloRecuperado) */
    document.querySelector('#peliculasStorage').innerHTML=tituloRecuperado;
 


//Borrar peliculas
var formularioB = document.querySelector('#formBorrarPelicula');
    formularioB.addEventListener('submit', ()=>{

        var titulo = document.querySelector('#borrarPelicula').value;

        if(titulo.length >= 1){
            
            var numeroKey  = localStorage.length+1;
             localStorage.removeItem(titulo, titulo); 
        }
        });
});
