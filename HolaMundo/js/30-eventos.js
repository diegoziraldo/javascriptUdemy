'use strict'

//Eventos del mouse
/* var boton = document.querySelector("#boton"); */
window.addEventListener('load',()=>{
    function eventoClick(){
        console.log("apretaste")
    
        var colorBoton = boton.style.background;
    
        if(colorBoton == "yellow"){
            boton.style.background = "green";
            
        }
        else{
            boton.style.background = "yellow";
            
    
        }
        boton.style.fontSize= "30px";
    }
    
    var boton = document.querySelector("#boton");
    
    //Click
    //Con el 'addEventListener()', lo que vamos a hacer,
    //es decirle al elemento capturado lo que queremos que haga desde javascript
    boton.addEventListener('click',()=>{
        eventoClick();
    })
    console.log(boton)
    
    //Mouse Over
    boton.addEventListener('mouseover', ()=>{
        boton.style.color = "red";
    })
    //Mouse Out
    boton.addEventListener('mouseout', ()=>{
        boton.style.background = '#554477';
    })
    
    //Focus
    
    var input = document.querySelector('#campoNombre');
        input.addEventListener('focus', ()=>{
            console.log('Estas dentro del input')
        })
    
    //Blur
    input.addEventListener('blur', ()=>{
        console.log('Estas afuera del input')
    })
    
    //Keydown
    input.addEventListener('keydown', ()=>{
        console.log('Estas pulsando una tecla', String.fromCharCode(event.keyCode));
    })
    
    
    //Keypress
    input.addEventListener('keypress', ()=>{
        console.log('Tecla presionada', String.fromCharCode(event.keyCode));
    })
    
    
    //Keyup
    input.addEventListener('keyup', ()=>{
        console.log('Tecla presionada', String.fromCharCode(event.keyCode));
    })


})


