'use strict'

//Programa que nos pida dos numeros y decir cual es mayorm cual es menor y sin son iguales

var numero1 = parseInt(prompt('Introduce el primer numero'));
var numero2 = parseInt(prompt('Introduce el segundo numero'));

while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt('Introduce el primer numero'));
    alert('No es un numero valido');
    var numero2 = parseInt(prompt('Introduce el segundo numero'));
    alert('No es un numero valido');
}

 if(numero1 == numero2){
    console.log('El numero 2 es igual al numero 1')
    console.log(numero1 +'='+ numero2)

    if(numero1 > numero2){
        console.log('El numero 1 es mayor que el numero 2')
        console.log(numero1 +'>'+ numero2)
 }
}
 else {
     console.log('El numero 2 es mayor al numero 1')
     console.log(numero1 +'<'+ numero2)
 }
