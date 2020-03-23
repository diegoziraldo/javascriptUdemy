'use strict'

window.addEventListener('load',()=>{

//Timers
    /* var agrandado = 1; */
var tiempo = setInterval(()=>{
    
    console.log("ejecutado");
    
    //document.querySelector('button').style.fontSize = agrandado + "px"; 
    //agrandado = agrandado + 1; 
    //console.log(agrandado)

    var boton = document.querySelector('#boton');
        if(boton.style.fontSize == '20px'){
            boton.style.fontSize = '13.3333px'
        }
        else{
            boton.style.fontSize = '20px'
        }
    console.log(boton)
},1000);

function intervalo(){
    var tiempo = setInterval(()=>{
    
        console.log("ejecutado");
        
        //document.querySelector('button').style.fontSize = agrandado + "px"; 
        //agrandado = agrandado + 1; 
        //console.log(agrandado)
    
        var boton = document.querySelector('#boton');
            if(boton.style.fontSize == '20px'){
                boton.style.fontSize = '13.3333px'
            }
            else{
                boton.style.fontSize = '20px'
            }
        console.log(boton)
    },1000);
    return tiempo
}

var tiempo = intervalo()

var stop = document.querySelector('#stop');

stop.addEventListener('click', ()=>{
    alert("Paraste el tiempo");
    clearInterval(tiempo);

})

var start = document.querySelector('#start');

start.addEventListener('click', ()=>{
    alert("Iniciaste el tiempo");
    intervalo();

})


























/* var tiempo = setTimeout(()=>{
    
    console.log("ejecutado");
    //document.querySelector('button').style.fontSize = agrandado + "px"; 
    //agrandado = agrandado + 1; 
    //console.log(agrandado)

    var boton = document.querySelector('button');
        if(boton.style.fontSize == '50px'){
            boton.style.fontSize = '30px'
        }
        else{
            boton.style.fontSize = '50px'
        }

    console.log(boton)


},1000);
*/






})