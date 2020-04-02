'use strict'
//una API REST es un backend que nos devuelve datos en JSON

window.addEventListener('load', ()=>{

//Fetch (ajax) y peticiones a servicios / apis rest

//Aqui estamos usando el metodo fetch,
//donde le pasaremos una url, que tendra datos en formato JSON
var usuario = []; 
var div_usuarios = document.querySelector('#usuarios');
var carga = document.querySelector("#cargando")


fetch('https://jsonplaceholder.typicode.com/users')
    .then(data=>data.json())

/*     .then(function (data){
            data.json()
    }) */
    .then(users =>{
        usuario = users;
        console.log(usuario);
        
        //Aca estamos usando el metodo "map()", que lo que hace es,
        //crear un array de todos los objetos que va a tener nuestra API,
        //en este caso "usuario"
        usuario.map((usuario)=>{
            /* console.log(users) */
            let nombre = document.createElement('p');
            nombre.innerHTML = `${usuario.name} <br> ${usuario.username};`
            //Aqui estamos trayendo el div usuario, 
            //desde el DOM al cual le pondremos la etiqueta <p>,
            //que estamos creando, con el valor que le estamos agregando
            div_usuarios.appendChild(nombre)
            //Aqui estamos haciendo que la etiqueta,
            //que creamos dentro del div se borre cuando se ejecute esta funcion
            carga.style.display = "none";
        })
    })
})