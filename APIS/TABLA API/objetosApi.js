'use strict'

window.addEventListener('load',()=>{

var boton = document.querySelector('#boton');
var contenido = document.querySelector('#contenido');

boton.addEventListener('click', ()=>{

    fetch('tabla.json')
        .then( res => res.json())
        .then( res =>{
            mostrar(res);
    })
})

function mostrar(res){
    /* console.log(res) */
    //Aqui haremos un bucle for para recorrer, 
    //todos los objetos que tendremos en nuestra API 
    for(let valor of res){
        //Aqui pondremos dentro del div "contenido",
        //toda el esqueleto en formato html,
        //esto lo logramos mediante las comillas " `` ",
        //con el "+=", concatenaremos este bloque,
        //cada ves que el bucle recorra cada objeto
        contenido.innerHTML +=`
        <tr>
            <th scope="row">${valor.id}</th>
            <td>${valor.nombre}</td>
            <td>${valor.email}</td>
            <td>${valor.telefono}</td>
            <td>${valor.estado ? 'Soltera':'Casada' }</td>
        </tr>
        `;
    };
}
})
