'use strict'

/* 
1.Pedir 6 numeros por pantalla y cargarlos en un array
2.Mostrar el array entero, en el cuerpo de la pagina y la consola
3.Ordenarlo y mostrarlo
4.Invertir el orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

var numerosArray = [];

var numeros;
document.write("<h3>Numeros del array</h3>")
for(let i=0;i<=5;i++){
    numeros = prompt("Ingrese el numero "+ (i+1),0);
    numerosArray.push(numeros);
}
//Mostrar en el cuerpo de la pantalla
for(let mostrarArray in numerosArray){
    document.write(numerosArray[mostrarArray] + "<br/>") 
}


//Mostrar array por consola
console.log(numerosArray);

for(let i=0;i<6;i++)
    if(numerosArray[i]<numerosArray[i+1]){
        document.write
}

//Mostrar el array de forma ascendente
function numerosAscendente(){
numerosArray.sort((a,b)=>a-b);
document.write("<h3>Numeros ascendente</h3>")


for(let numeroOrdenado in numerosArray){
    document.write(numerosArray[numeroOrdenado] + "<br/>") 
}
}

//Mostrar el array de forma descendente
function numerosDescendente(){
numerosArray.sort((a,b)=>b-a);
document.write("<h3>Numeros descendente </h3>")

for(let numeroOrdenado in numerosArray){
    document.write(numerosArray[numeroOrdenado] + "<br/>") 
}
}

function cantidadDeElementos(){
    var texto = "Los elementos del array son: "; 
    document.write("<h3>Cantidad de elementos del array </h3>")
    var elementosArray =  parseInt(numerosArray.length);
    return texto + elementosArray;
}

function busquedaDeValor(){
var buscarNumero = prompt("Ingrese el numero a buscar");

var buscado = numerosArray.findIndex((numbuscado)=>{
    return numbuscado == buscarNumero;
})

console.log(buscado);
};

numerosAscendente();
numerosDescendente();
document.write(cantidadDeElementos());
busquedaDeValor();

