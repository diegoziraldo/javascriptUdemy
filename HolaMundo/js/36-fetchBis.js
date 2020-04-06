'use strict'
//una API REST es un backend que nos devuelve datos en JSON

window.addEventListener('load', ()=>{

//Fetch (ajax) y peticiones a servicios / apis rest

//Aqui estamos usando el metodo fetch,
//donde le pasaremos una url, que tendra datos en formato JSON
var usuario = []; 
var div_usuarios = document.querySelector('#usuarios');
var div_Janet = document.querySelector('#usuarioJanet');
var carga = document.querySelector("#cargando");
var carga2 = document.querySelector("#cargandoJanet");


    //Aqui estamos llamando a la funcion "getUsuario()", 
    //esta funcion tiene una promesa que viene desde una url,
    //al tener una promesa entonces la podremos ver con la funcion .then
    getUsuarios()
        .then(data=>data.json())
        .then(users =>{
            users.data;
        //Aqui estamos llamando a la funcion,
        //que nos va a crear el listado de los usuarios,
        //los usuarios se los debemos pasar por paramentro 
        listadoUsuarios(users.data)
        
        //Cuando retornamos una funcion a una funcion,
        //la funcion que va a recibir este return,
        //automaticamente se va a convertir en esa funcion retornada,
        //asi que automaticamente seria una nueva funcion.
        return getJanet()
    })
        //Aqui entonces devuelta empezamos a extraer las promesas,
        //que tendra esta nueva funcion
        .then(data => data.json())
        .then(janet => {
            let usuarioJanet = janet.data;

        //Aqui llamamos a la funcion que va mostrarnos,
        //el elemento que le pedimos y lo enviara al DOM  
            mostrarJanet(usuarioJanet)

            return getInfo();
            })
            .then(data =>{
                console.log(data);
            });
    



        /*
        then(data=>data.json())
        .then(users =>{
        users.data;
        }) 
        */
    //Aqui estamos creando la funcion "getUsuarios()",
    //el cual nos retornara una promesa, 
    //entonces la funcion se convertira en una promesa
    function getUsuarios(){
        return fetch('https://reqres.in/api/users')
    }

    //Aqui estamos creando la funcion "getJanet()", 
    //la que obtendremos el usuario "Janet de la lista de usuarios"
    function getJanet(){
        return fetch('https://reqres.in/api/users/2')
    }

    function getInfo(){
    
        //Aqui estamos creando el objeto profesor, con 3 propiedades
        var profesor = {
            nombre: "Diego",
            apellido: "Ziraldo",
            url: 'http://google.com.ar'
                
        };  
        
        //Aqui estamos creando una promesa, 
        //la cual tendra un callback con dos parametros
        return new Promise((resolve, reject)=>{
            
            //Aqui estamos convirtiendo el objeto JSON,
            //a una cadena de string
            var profesor_string = JSON.stringify(profesor)
            
            //Aqui estamos creando un condicional,
            //para comprobar si el objeto que creamos,
            //se convirtio en un 'string' o no  
            if(typeof profesor_string !='string'){
                setTimeout(()=>{

                },3000) 
                return reject('error')
            }else{
                return resolve(profesor_string);
            }
        }) 
    }

    //Aqui estamos creando la funcion que nos mostrara la api que estamos consultando,
    //la que sera mostrada en el DOM
    function listadoUsuarios(usuarios){    
        usuarios.map((usuarios)=>{
            /* console.log(users) */
            let nombre = document.createElement('p');
            nombre.innerHTML = `${usuarios.id} - ${usuarios.first_name} ${usuarios.last_name}`

            div_usuarios.appendChild(nombre)
            carga.style.display = "none";
        })
    }

    function mostrarJanet(usuario){    
            /* console.log(users) */
            let nombreJanet = document.createElement('p');

            //Aqui estamos creando un elemento "<img>",
            //en el cual cargaremos la imagen que viene en la API
            let avatar = document.createElement('img');
           
            nombreJanet.innerHTML = `${usuario.id} - ${usuario.first_name} ${usuario.last_name}`
            
            //aqui estamos cargando el "<img>" creado,
            //con la imagen que estamos buscando en la API 
            avatar.src = usuario.avatar;

            div_Janet.appendChild(nombreJanet);
            div_Janet.appendChild(avatar);

            carga2.style.display = "none";

    }
})

