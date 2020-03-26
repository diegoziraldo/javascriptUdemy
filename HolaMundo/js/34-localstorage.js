'use strict'

//Localstorage
//Con localstorage, vamos a poder guardar datos en el navegador,
//sin necesidad de conectarse a una base de datos
//En algunos navegadores no estan disponible el local storage

window.addEventListener('load', ()=>{

//Con este condicional verificamos si el navegador 
//que estamos usando tiene disponible el localstorage
/* if(typeof(Storage)!=='undefined'){
    console.log('Disponible')
}
else{
    console.log('No esta compatible')
} */


//Guardar datos en el localstorage
localStorage.setItem('Titulo', 'Curso de Javascript, desde localStorage')

//Recuperar elemento del localStorage
var elementoRecuperado = localStorage.getItem('Titulo')
document.querySelector('#parrafo').innerHTML = elementoRecuperado;

//Guardar objetos en el localStorage
//Para guardar un objeto en el localStorage, 
//debemos convertir el objeto JSON String.
var usuario = {
    nombre:"Diego",
    mail:"ziraldodiego@gmail.com",
    web:"www.ferdiz.com" 
};

var usuarioString = localStorage.setItem('Usuario', JSON.stringify(usuario));


//Recuperar objeto
//Para recuperar un Objeto en formato JSON, 
//debemos usar el metodo "JSON.parse()"
var usuarioRecuperado = JSON.parse(localStorage.getItem('Usuario'));
document.querySelector('#datos').innerHTML = usuarioRecuperado.mail;

//Borrar elementos del localStorage
/* localStorage.removeItem('Usuario');
localStorage.removeItem('Titulo'); */

//Con "localStorage.clear()", borro todo lo que tenga en el localStorage
/* localStorage.clear(); */

console.log (usuarioRecuperado);













})
