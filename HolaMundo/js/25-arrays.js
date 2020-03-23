'use strict'

//Arrays

var nombres = ['Diego','Marisol','Ileana','Soledad', "Patricia", "Celina", 21, true];

var lenguajes = new Array('php', 'JS', 'Java');

/* var elemento = prompt('Que elemento del array queres'); */

document.write("<h1>Nombres</h1>")

document.write("<ul>");

/*  for(var i=0;i<nombres.length;i++){
        document.write("<li>" + nombres[i] + "</li>")
    } */

/*     nombres.forEach((elemento)=>{
        document.write('<li>' + elemento + '</li>')
    });

document.write("</ul>"); */

for (let nombre in nombres){
    document.write(nombres[nombre] + "<br/>")
}







/* while(elemento>=nombres.length){
    alert("no existe ese elemento")
    elemento = prompt('Que elemento del array queres');

}
    alert(nombres[elemento]);
 */


/* if(elemento>=nombres.length){
    alert("no existe ese elemento")
}
else{
    alert(nombres[elemento]);
} */

