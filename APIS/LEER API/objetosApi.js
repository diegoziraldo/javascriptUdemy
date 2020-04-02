'use strict'

window.addEventListener('load',()=>{

var boton = document.querySelector('#boton');
var contenido = document.querySelector('#contenido');

boton.addEventListener('click', ()=>{
    //Con esta funcion vamos a crear una promesa,
    //y como parametros le pasamos una url, 
    //que va a ser una API donde tendremos datos de una persona
    fetch('tabla.json')
    //Con .then() vamos a traer la promesa que nos va a dar fetch(),
    //esa promesa la vamos a ver como una respuesta 'res',
    //esa respuesta la vamos a convertir a formato '.json()'
    .then(res => res.json())
    //A ese 'res.json()', lo mostraremos por pantalla mediante una funcion,
    //que crearemos aqui... 
    .then(data =>{
        /* console.log(data); */
        var p = document.createElement('p');
        p.setAttribute('id', 'parrafo');
        /* p.innerHTML = `${data.results[0].location.city}`; */
        console.log(data)
        contenido.innerHTML = `${data[0].nombre} <br> ${data[0].email}`;
        /* `
            <img src="${data.results['0'].picture.large}" width="25%" class="img-fluid rounded-circle" >
            <p>Nombre: ${data.results[0].name.first} ${data.results[0].name.last}</p>
            <p>Email: ${data.results[0].email}</p>
            <p>Edad: ${data.results[0].dob.age} años.</p>
        ` */ 






/*     fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data =>{
            console.log(data);

 
        }) */

/* var p = document.createElement('p');
p.setAttribute('id', 'parrafo');
p.textContent = `${data}`;
contenido.append(p);
console.log(p);  
*/

})
})
})
