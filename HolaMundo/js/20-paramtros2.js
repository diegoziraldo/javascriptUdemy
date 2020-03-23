'use strict'

//Paramtros REST Y SPREAD

//con el parametro ...REST, vamos a poner todos los elementos dentro de un array
function listadoFrutas(fruta1, fruta2, ...REST){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log("Fruta 2: ", REST);


}
listadoFrutas("Naranja", "Frutilla", "Pera", "Banana", "Mango", "Manzana")

//con el parametro ...SPREAD, vamos a sacar todos los elementos del array para ponerlos como paramentros
var frutas = ["Sandia","Mandarina"]
listadoFrutas(...frutas, "Naranja", "Frutilla", "Pera", "Banana", "Mango", "Manzana")

