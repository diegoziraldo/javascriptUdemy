'use strict'

/* Muestre todos los numeros divisores de un numero */

var numero1 = parseInt(prompt('Introduce un numero'));

for(var i=0;i<=numero1;i++){
    if(numero1%i==0){
        console.log(i)
    }
}