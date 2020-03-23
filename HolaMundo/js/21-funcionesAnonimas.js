'use strict'
/* function numero1(){
    return 2;
}

var num2 = function numero2(){
    return 2;
}
    
var num1 = numero1()
console.log(num1); */



//Funciones anonimas
//Es una funcion que no tiene nombre

/* var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}  */

/* function sumame(numero1,numero2){
    var sumar = numero1 + numero2;
    return sumar
}

console.log(sumame(5,7)); */
 
//Funcion callback

function sumame(numero1,numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar
}

sumame(5,7, 
/*     function(dato){
        console.log('La suma es de: ' + dato)
    },
    function(dato){
        console.log('La suma es de: ' + dato*2)
    } */

    //Funciones flecha
    (dato) =>{
        console.log('La suma es de: ' + dato)
    },
    (dato) =>{
        console.log('La suma es de: ' + dato*2)
    }
);



