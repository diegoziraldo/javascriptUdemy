'use strict'

var texto = 'Hola Mundo soy una variable global'
var numero = 23;

function holaMundo() {
    //Esta variable solamente la vamos a poder usar dentro de esta funcion
    var hola_mundo = ('variable local')
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

console.log(holaMundo);