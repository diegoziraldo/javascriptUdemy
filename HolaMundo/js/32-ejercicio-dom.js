'use strict'

//Aqui estamos creando este evento para que cuando se cargue el html,
//tambien se cargue esta funcion 'load';
window.addEventListener('load',()=>{
    //Aqui estamos guardando en una variable lo que tenemos 
    //en el id formulario
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    var preBoton = document.querySelector("#sub")
    box_dashed.style.display = "none";

    
    
    //Aqui vamos a crear una variable donde guardaremos un div,
    //el cual usaremos luego para ingresar el elemento creado
    var emailDom = document.querySelector("#email");

    //Aqui estamos creando un elemento label, 
    //el cual lo guardamos dentro de una variable,
    //luego le agregamos los atributos 
    //que va a llevar con el metodo "setAttribute()", 
    //luego le ingresamos un Texto mediante el metodo "append()",
    //luego la ingresamos al lugar donde lo queremos poner,
    //aqui lo pondremos dentro de un div que llamamos mediante el metodo 
    //querySelector, el cual lo guardamos dentro de la variable
    var nombreCelda = document.createElement('label');
        nombreCelda.setAttribute('for', 'email');
        nombreCelda.setAttribute('value', 'Email');
        nombreCelda.innerHTML = "E-mail";
        preBoton.appendChild(nombreCelda);

    var inputJs = document.createElement('input');

        inputJs.setAttribute('placeholder', 'Email');
        inputJs.setAttribute('id', 'email');
        inputJs.setAttribute('type', 'text');
        inputJs.setAttribute('name', 'email');
        preBoton.appendChild(inputJs);

/*     var br = document.createElement('<br/>');
        preBoton.appendChild(br);
        preBoton.appendChild(br); */


    //Aqui estamos poniendole un evento 'submit' al boton submit.
    formulario.addEventListener('submit', ()=>{
        console.log('Enviado')
        box_dashed.style.display = "block";

    //Aqui estamos guardando en una variable el valor ".value",
    //de lo que nos devolvera el elemento que estamos seleccionando    
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var edad = document.querySelector('#edad').value;
    var email = document.querySelector('#email').value;

    if(nombre.trim() == null || nombre.trim().length == 0){
        alert('El nombre no es correcto');
        document.querySelector("#error_nombre").innerHTML="El nombre no es valido"
        return false;
    }else{
        document.querySelector("#error_nombre").style.display = "none";

    }
    
    if(apellido.trim() == null || apellido.trim().length == 0){
        alert('El apellido no es correcto');
        return false;
    }
    
    if(edad.trim() == null || edad.trim().length == 0 || isNaN(edad)){
        alert('La edad no es correcta');
        return false;
    }
    
    if(email.trim() == null || email.trim().length == 0){
        alert('El email no es correcto');
        return false;
    }
    //Aqui estamos mostrando en la consola los valores de todas las variables cargadas
    console.log(nombre, apellido, edad);
    
    var datosUsuario = [nombre, apellido, edad, email];
    var textos = ["El nombre es: ", "El apellido es: ", "La edad es: ", "El E-mail es: "];
    
    //Aqui estamos creando el bucle for 
    //del cual vamos a crear por cada vuelta un elemento 'p',
    //al que le pondremos dentro el elemento del array correspondiente
    for(var indice in datosUsuario){
        var parrafo = document.createElement('p')
        parrafo.append(textos[indice] + datosUsuario[indice])
        box_dashed.append(parrafo);
    }   
    })














})