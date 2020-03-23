'use strict'

/*  -Calculadora que pida dos numeros por pantalla
    -Si cargamos un numeros mal que lo vuelva a pedir
    -Que nos muestre en el body de la pantalla en un alert y la consola 
    el resultado de la suma, resta, multiplicacion y division de esos numeros */


    var numero1 = parseInt(prompt('Ingrese el primer numero'));
    var numero2 = parseInt(prompt('Ingrese el segundo numero'));

    while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
        numero1 = parseInt(prompt('Ingrese el primer numero'));
        numero2 = parseInt(prompt('Ingrese el segundo numero'));
    
    }

    var resultado = "La suma es: " + (numero1+numero2) + '</br>' +
                    "La resta es: " + (numero1-numero2) + '</br>' + 
                    "La multiplicacion es: " + (numero1*numero2) + '</br>' + 
                    "La division es: " + (numero1/numero2 + '</br>');
    
    var resultadoCmd = "La suma es: " + (numero1+numero2) + "\n" +
                    "La resta es: " + (numero1-numero2) + "\n" + 
                    "La multiplicacion es: " + (numero1*numero2) + "\n" + 
                    "La division es: " + (numero1/numero2 + "\n");
    document.write(resultado);
    alert(resultadoCmd);
    console.log(resultadoCmd)