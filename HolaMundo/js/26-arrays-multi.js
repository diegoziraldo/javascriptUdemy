'use strict'

var categorias = ["Drama","Terror","Comedias","Romanticas"];
var peliculas = ["El secreto de sus ojos","El proyecto Blairwich","Tonto y retonto","Diario de una pasion",];

var cine = [categorias, peliculas];

/* console.log(cine[1][0]) */

//con el metodo push vamos a agregar un elemento al array

//Aqui estamos creando un programa para agregar elementos a un array

/* do {
    var elemento = prompt('Introduce tu pelicula: ');
    peliculas.push(elemento);
} while (elemento!=0);
    peliculas.pop(elemento);
    console.log(peliculas); */

//Con el metodo "indexOf()", vamos a poder buscar un elemento del array, y nos devolvera el indice donde se encuentra 
var indice = categorias.indexOf("Romanticas");

console.log(indice);

/*Aqui vamos a usar el metodo "splice()" para eliminar un elemento del array, 
en el primer parametro del metodo pondremos el valor a borrar, 
y en el segundo la cantidad de valores que borraremos 
a partir de ese elemento*/

if(indice > -1){
    categorias.splice(indice);
}
console.log(categorias);

/* Con el metodo "join()", pasaremos los elementos del array a una cadena de caracteres, separados por comas */
var stringCategorias = categorias.join();
console.log(stringCategorias);

/*Con el metodo 'split()', convertiremos un texto en un array, 
la forma que me dividira esos elementos que tendra el array 
se la daremos por medio de parametros */

var cadena = 'texto1, texto2, texto3';
var cadenaArray = cadena.split(" ");
console.log(cadenaArray);

console.log(peliculas);
console.log(categorias);

/* Con el metodo "reverse()", vamos a dar vuelta el orden 
de los elementos del array */
peliculas.reverse();
console.log(peliculas)

/*Con el metodo "sort()", vamos a ordenar alfabeticamente 
los elementos del array*/
categorias.sort();
console.log(categorias)

var lenguajes = ['Java','Python','C++','Go','Visual Basic']
/* console.log(lenguajes); */

/*Aqui estamos usando el metodo "find()", 
que nos va a servir para buscar un elemento en el array./*

/* var busqueda = lenguajes.find((lenguaje)=>{
    return lenguaje == "Java";
}) */

/*Aqui estamos usando el metodo "findIndex()", 
que nos va a servir para buscar un elemento en el array 
y nos devolvera su numero de indice que tiene dentro del array.*/

/* var busqueda = lenguajes.findIndex((lenguaje)=>{
    return lenguaje == "C++";
}) 

console.log(busqueda) */

/* Con el metodo "some()", lo que hacemos es comparar 
los valores de un array, con un numero que le pasemos por parametros  */
var numeros = [10, 25, 36, 54];

var busqueda = numeros.some(precio => precio == 36)

console.log(busqueda)
























