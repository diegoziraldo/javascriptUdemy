/* Mostrar todos los numeros impares que hay entre dos numeros 
introducidos por el usuario */

let numero1 = parseInt(prompt('Introduce un numero'));
let numero2 = parseInt(prompt('Introduce un numero'));

/* for(var i=numero1;i<=numero2;i++){
    var impar = i%2;
     if(impar==1){
        document.write('Los numeros impares son: ' + i + '</br>');
    }
     
} */

while(numero1<=numero2){
    
   /*  var impar = numero1%2; */
    
    if(numero1%2 !=0){
       document.write('Los numeros impares son: ' + numero1 + '</br>');
   }
   numero1++
}