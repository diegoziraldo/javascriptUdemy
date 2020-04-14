//Javascript nativo
/* var caja = document.querySelector('#caja');

caja.addEventListener('click',()=>{
    caja.style.background = "orange";

}); */

//Jquery
//Con este codigo estamos suplantando a,
//window.addEventListener('load',()=>{})
$(document).ready(()=>{
    //En Jquery, cuando ponemos el singo pesos '$', 
    //es como poner 'document.querySelector',
    //luego ponemos entre parentesis lo que queremos traer del DOM,
    //luego pondremos el evento que activara la funcion a realizar,
    //en los parametro de este evento pondremos la funcion que realizara,
    //dicho elemento
   $('#caja').click(()=>{

    //Aqui estamos al elemento que tenemos en ID caja,
    //para cargarle los elementos css,
    //que tendra despues de activar el evento 'click'
    $('#caja').css({
        'background':"red",
        'width':'300px',
        'height':'200px',
    })
})
})