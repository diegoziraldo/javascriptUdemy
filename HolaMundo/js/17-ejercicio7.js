'use strict'

/* Tabla de multiplicar de un numero introducido por pantalla */


/* var numero1 = parseInt(prompt('Introduce el numero a multiplicar')); */
var numero1=1;

for(var i=0;i<10;i++){
    document.write('Tabla del ' + numero1 + "</br>");
    for(var o=1;o<=10;o++){
        document.write(numero1 + 'X'+o+ ' = ' + numero1*o + '</br>')
}
document.write("</br>");
numero1++
}


/* var contador=0;

while(contador<=10){
    document.write(numero1 + 'X'+contador + ' = ' + numero1*contador + '</br>')

    contador++
} */