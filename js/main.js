$(document).ready(function(){
  tiempo();
});

function tiempo(){
  setTimeout(function() {
    aparece();
  },5000);
}

function tiempo_sec(){
  setTimeout(function() {
    $("#segunda_sec").fadeOut(1500);
    $("#primera_sec").fadeIn(1500); 
    tiempo();
  },6000);
}

function aparece(){
  $("#primera_sec").fadeOut(1500);
  $("#segunda_sec").fadeIn(1500); 
  tiempo_sec();
}

var temporizador = setTimeout("reloj()",1000);
  
  function reloj(){
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var min = tiempo.getMinutes();
    var seg = tiempo.getSeconds();
    
    if(min < 10)
		  min = "0" + min;

	  if(seg < 10)
		  seg = "0"+ seg;
    document.getElementById("reloj").innerHTML = hora+":"+min+":"+seg;
    
    var temporizador = setTimeout("reloj()",1000);

  }