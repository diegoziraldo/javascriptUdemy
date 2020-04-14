'use strict'

window.addEventListener('load', ()=>{

//Aqui estamos creando el objeto 'Date()', 
//y la vamos a guardar adentro de una variable
var fechas = new Date();

//Aqui vamos a ver los diferentes metodos que tiene el objeto 'Date()'
var hora = fechas.getHours();
var minutos = fechas.getMinutes();
var segundos = fechas.getSeconds();


console.log(`Es la hora ${hora},
El minuto ${minutos}
El segundo ${segundos}`)

//Con 'console.dir()', vamos a ver todos los metodos del objeto
/* console.dir(fechas); */
})
