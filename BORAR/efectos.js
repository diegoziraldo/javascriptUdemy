

window.addEventListener('load', ()=>{

var divPunto = document.querySelector('#loading');


repetir();
var contador = 0;
function repetir(){
    
    setInterval(puntos, 800);
}

function puntos(){
    if(contador < 3){ 
    divPunto.innerHTML += `.`;
    contador++;
    }
    else{
        divPunto.innerHTML = ``;
        contador = 0;    
    }

}

});



/* var inputJs = document.createElement('input');

inputJs.setAttribute('placeholder', 'Email');
inputJs.setAttribute('id', 'email');
inputJs.setAttribute('type', 'text');
inputJs.setAttribute('name', 'email');
preBoton.appendChild(inputJs);
 */