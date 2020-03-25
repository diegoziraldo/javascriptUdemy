'use strict'

window.addEventListener('load',()=>{


//JSON - JavaScript Object Notation

//Aqui estamos creando un objeto JSON
//El objeto JSON, es un array asociativo, 
//adentro va a tener propiedades, y las propiedades sus valores
var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos' 
}

//Aqui estamos creando un Array de objetos JSON
var peliculas = [
    {
    titulo:'Esperando la carroza',
    year: 1985,
    pais: 'Argentina'
},
    {
    titulo:'Los Exterminator',
    year: 1990,
    pais: 'Argentina'

    },

]

var cajaPeliculas = document.querySelector('#peliculas');
/* console.log(cajaPeliculas) */

var index;
for(index in peliculas){
    var parrafo = document.createElement('p');
    
    cajaPeliculas.appendChild(parrafo);
        
        parrafo.append(peliculas[index].titulo + peliculas[index].year);

    /* parrafo.append(peliculas[index].pais); */

    

}

console.log(salto)
/* pelicula.titulo = "Superman Begins" */

/* console.log(peliculas) */

})