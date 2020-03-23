'use strict'

//Funciones
//Una funcion en ina agrupacion reutilizable de un conjunto de instrucciones

/* function calculadora(){

    console.log('Hola soy la calculadora');
    console.log('Si soy yo');
    return "Hola soy la calculadora";
}
calculadora(); */
/* console.log(calculadora()); */

//PARAMETROS OPCIONALES
/* function calculadora(numero1=15 , numero2){

    console.log('Suma: ' + (numero1 + numero2));
    console.log('Resta: ' + (numero1 - numero2));
    console.log('Multiplicacion: ' + (numero1 * numero2));
    console.log('Division: ' + (numero1 / numero2));
    return "Hola soy la calculadora";
}
calculadora("" , 12); */

/* function calculadora(numero1=15 , numero2, mostrar = false){

if(mostrar == true){
    console.log('Suma: ' + (numero1 + numero2));
    console.log('Resta: ' + (numero1 - numero2));
    console.log('Multiplicacion: ' + (numero1 * numero2));
    console.log('Division: ' + (numero1 / numero2));
    return "Hola soy la calculadora";
}else{
    document.write('Suma: ' + (numero1 + numero2));
    document.write('Resta: ' + (numero1 - numero2));
    document.write('Multiplicacion: ' + (numero1 * numero2));
    document.write('Division: ' + (numero1 / numero2));
}
}
calculadora(30 , 12, true); */

//Funciones callback

function calculadora(numero1=15 , numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1,numero2);
    }
    else{
        porPantalla(numero1,numero2);
    }
}

function porConsola(numero1,numero2){
    console.log('Suma: ' + (numero1 + numero2));
    console.log('Resta: ' + (numero1 - numero2));
    console.log('Multiplicacion: ' + (numero1 * numero2));
    console.log('Division: ' + (numero1 / numero2));
}
function porPantalla(numero1,numero2){
    document.write('Suma: ' + (numero1 + numero2));
    document.write('Resta: ' + (numero1 - numero2));
    document.write('Multiplicacion: ' + (numero1 * numero2));
    document.write('Division: ' + (numero1 / numero2));
}

calculadora(3,5, false)