'use strict'

var nombre = prompt('Ingrese su nombre');
var apellido = prompt('Ingrese su apellido');

//Aqui estamos creando una variable de tipo plantilla
var texto = `
    <h1>Datos Personales</h1>
    <p>Mi nombre es: <strong>${nombre}</strong></p>
    <p>Mi apellido es: <strong>${apellido}</strong></p>

`;

document.write(texto);