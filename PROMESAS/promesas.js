'use strict'

//Las promesas en una forma de tratar operaciones asincronas

window.addEventListener('load',()=>{

    let x = 10;

    //Aqui estamos creando una promesa,
    //adentro vamos a tener otra funcion con 2 parametros 'resolve', 'reject'
    //El parametro '(resolve)', nos va a enviar la promesa resuelta,
    //El parametro '(reject)', nos va a enviar el error de esa promesa
    //que se va a ejecutar cuando mandemos a llamar a la promesa
    const promesa = new Promise((resolve, reject)=>{
       //
       if(true){
           resolve('La operacion fue un exito')
       }else{
           reject('Ocurrio un error')
       }
    });
    
    //Aqui vamos a ejecutar la promesa que creamos
    promesa
        //Con .then vemos la respuesta del parametro 'resolve',
        //que nos envia la promesa
        .then((res)=>{
            console.log(res)
        })
        //Con .catch vemos la respuesta del parametro 'reject',
        //que nos envia la promesa
        .catch((error)=>{
            console.log(error)
        })






})