
var cv,cx,objetos,img;

function comenzar(){

var elemento = document.getElementById("canvas");
canvas = elemento.getContext("2d");

   lineasPano(canvas, 10, 10, 130, 180, 5);
   lineasPano(canvas, 600, 10, 130, 180, 5);
   lineasPano(canvas, 750, 10, 130, 180, 5);
   lineasPano(canvas, 900, 10, 130, 180, 5);
   lineasPano(canvas, 1050, 10, 130, 180, 5);

   canvas.fillRect(10,10,130,180);
}


   /*function actualizar(){

        for(var i=0;i<objetos.length;i++){
             canvas.fillStyle = objetos[i].color;
             canvas.fillRect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height);
       }}




        objetos = [];

        objetos.push
        img = new Image();
        img.src = "CARTAS/1_DIAMANTE.png";
        img.onload = function(){
             canvas.drawImage(img,10,200);

        objetos.push
        img = new Image();
        img.src = "CARTAS/2_DIAMANTE.png";
        img.onload = function(){
             canvas.drawImage(img,200,230);
        }}

       actualizar();
var objetoActual = null;
       canvas.onmousedown = function(event){
            //console.log("yeah");
            for(var i=0;i<objetos.length; i++){
                 if(objetos[i].x < event.clientX && (objetos[i].width +
                      objetos[i].x > event.clientX)){
                           objetoActual = objetos[i];
                           break;
                 }
            }
       }
       canvas.onmousemove = function(event){
            if(objetoActual != null){
                 objetoActual.x = event.clientX;
                 objetoActual.y = event.clientY;
            }
     actualizar();
       }

 }*/


function lineasPano(canvas,x,y,width,height,radius){
   canvas.beginPath();
   canvas.moveTo(x,y+radius);
   canvas.lineTo(x,y+height-radius);
   canvas.quadraticCurveTo(x,y+height,x+radius,y+height);
   canvas.lineTo(x+width-radius,y+height);
   canvas.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
   canvas.lineTo(x+width,y+radius);
   canvas.quadraticCurveTo(x+width,y,x+width-radius,y);
   canvas.lineTo(x+radius,y);
   canvas.quadraticCurveTo(x,y,x,y+radius);
   canvas.stroke();
}



window.addEventListener("load",comenzar, false);
