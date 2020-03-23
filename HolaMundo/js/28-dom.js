'use strict'

//Dom - Document Object Model

//1-CONSEGUIR ELEMENTOS CON UN ID CONCRETO

//Aqui estamos buscando el valor del Id que tenemos en el html,
//y ese valor lo vamos a guardar en una variable
//que traemos con el metodo "getElementById()", 
//el Id a buscar se lo pondremos dentro del parametro 

/* var caja = document.getElementById("micaja");

caja.innerHTML="hola";
caja.className = "divHola";

//var caja2 = caja.innerHTML = "texto desde js"

function cambiarColor(color){
    caja.style.background = color;
}

console.log(caja) */

//Aqui estamos buscando el valor de una etiqueta, Id o Class, 
//que tengamos en el html,que traemos con el metodo "querySelector()", 
//el elemento a buscar se lo pondremos dentro del parametro 

/* var caja = document.querySelector("p");

function cambiarColor(color){
    caja.style.background = color;
} */


//2-CONSEGUIR ELEMENTOS POR SU ETIQUETA
//Aqui estamos buscado todos los elementos que tengan
/* var todosLosDivs = document.getElementsByTagName('div');

function cambiarColor(color){
     for(let i=0;i<=todosLosDivs.length;i++)
        todosLosDivs[0].style.background = color;
}

console.log (todosLosDivs); */

//3-CONSEGUIR ELEMENTOS SEGUN SU CLASE
//
/* var elementosRojo = document.getElementsByClassName("rojo");
var elementosAmarillo = document.getElementsByClassName("amarillo");

for(let divRojo in elementosRojo){
    if(elementosRojo[divRojo].className=="rojo"){
        elementosRojo[divRojo].style.color = "red";
}
}
elementosAmarillo[0].style.color = "blue";
    console.log(elementosAmarillo) */

//Query selector
//Con el metodo "querySelector()", voy a traer un elemento 
//mediante el parametro, si quiero traer un Id(#), o un Class(.)
var id = document.querySelector(".amarillo")
console.log(id)

//Con el metodo "querySelectorAll()", voy a traer un array de elementos,
//segun lo que le pase por parametros
var divAll = document.querySelectorAll("div")
console.log(divAll[0])



















