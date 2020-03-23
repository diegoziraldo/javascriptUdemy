'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = 'Bienvenidos a casa';
var texto2 = 'Es una linda casa';

/* //con este metodo convertimos la variable de tipo numero a tipo String
var string = numero.toString();
console.log(typeof string);
console.log(typeof numero);

//con este metodo convertimos el contenido de la variable a mayusculas
var mayusculas = texto1.toUpperCase();
console.log(mayusculas);

//con este metodo convertimos el contenido de la variable a minusculas
var minusculas = texto2.toLowerCase();
console.log(minusculas);

//Calcular longitud
var nombre = 'Diego Ziraldo';
var nombreArray = ['Diego', 'Ziraldo', 'pedo']
//con la propiedad length se podran ver cuantos caracteres tiene una variable
console.log(nombre.length);

//con la propiedad length se podran ver cuantos elementos tiene una variable
console.log(nombreArray.length);

//Concatenar - unir textos
var textoTotal = texto1 + ' ' + texto2;
var textoTotal2 = texto1.concat(' ' + texto2)
console.log(textoTotal)
console.log(textoTotal2) */


//Busqueda de texto

var busqueda = texto1.match(/a/g);

console.log(busqueda);