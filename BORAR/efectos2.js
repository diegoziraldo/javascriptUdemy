'use strict'

window.addEventListener('load', ()=>{

empezar();

function empezar(){

    setInterval(intervalo, 3000);

}

function intervalo(){
var valor = 0;
var parar = setInterval(tiempo, 1000)

function tiempo(){

        console.log('hola');
        valor++;
 
        if(valor==3){
            console.log('chau')
            clearInterval(parar);
}  
}
}

})