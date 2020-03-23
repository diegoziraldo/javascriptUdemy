/* hacer un programa que muestre todos los numeros entre dos numeros
introducidos por el usuario */

var numero1 = parseInt(prompt('Ingrese el primer numero'));
var numero2 = parseInt(prompt('Ingrese el segundo numero'));

var contador=0;

for(var i=numero1;i<=numero2;i++){
    document.write(i + '<br>')
    contador++;
}
document.write('La cantidad de numeros son: ' + contador);