'use strict'

/* saber si un numero es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero */

var numero1 = parseInt(prompt('Ingrese el numero'));

while(isNaN(numero1)){
    console.log('El numero '+ numero1 + ' no es correcto')
}
    if(numero1%2==0){
    console.log('El numero '+ numero1 +' es par')
    }
    else{
    console.log('El numero '+ numero1 + ' es impar')
 
    }
    

    


