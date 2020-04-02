'use strict'



window.addEventListener('load',()=>{

    //Aqui estamos obteniendo los Id del dom para trabajarlos desde javascript
    var boton = document.querySelector('#boton');
    var contenido = document.querySelector('#contenido');
    /* var parrafo = document.querySelector('#parrafo') */

    //Aqui le estamos diciendo que el boton va a recibir un evento,
    //y cuando se dispare ese evento haga la funcion,
    //que le pondremos a continuacion
    boton.addEventListener('click', ()=>{

        //Aqui estamos usando la funcion 'fetch()', lo que hace fetch, 
        //es traernos una promesa, y como parametros vamos a poner la url,
        //donde ira a buscar, lo que nos va a devolver como promesa. 
        fetch('texto.txt')

            //Con '.then()', vamos a agarrar esa promesa, 
            //y le vamos a decir que esa promesa la convierta a texto 
            //con '.text()',  
            .then(data => data.text())

            //Una ves convertida a texto vamos a decirle 
            //mediante una funcion flecha que lo muestre por consola
            .then(data=>{
                console.log(data)
                /* parrafo.innerHTML = `${data}`; */
                var p = document.createElement('p');
                    p.setAttribute('id', 'parrafo');
                    p.textContent = `${data}`;
                    contenido.append(p);
                    console.log(p);                    

                    /* var borrar = document.querySelector('#parrafo')
                    borrar.innerHTML = 'caca';
                    console.log(borrar); */


})
})




})





/* window.addEventListener('load',()=>{
    var boton = document.querySelector('#boton');
    var contenido = document.querySelector('#contenido');

    boton.addEventListener('click', ()=>{
        fetch('texto.txt')
            .then(data => data.text())
            .then(data=>{
                console.log(data)
                
    var p = document.createElement('p');
        p.setAttribute('id', 'parrafo');
        p.textContent = `${data}`;
        contenido.append(p)
})
}) 
}) */