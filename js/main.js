$(document).ready(function(){
  loading();
  tiempo();
  //setTimeout('document.location.reload()',10000); Recarga pagina por tiempo
});

function loading(){
  var div1 = document.getElementById('content');
  var div2 = document.getElementById('loop');
  setTimeout(function() {
    div1.style.display="block";
    div2.style.display="none";
  },5000);
}

function tiempo(){
  setTimeout(function() {
    aparece();
  },5000);
}

function tiempo_sec(){
  setTimeout(function() {
    $("#segunda_sec").fadeOut(100);
    $("#primera_sec").fadeIn(100); 
    tiempo();
  },6000);
}

function aparece(){
  $("#primera_sec").fadeOut(100);
  $("#segunda_sec").fadeIn(100); 
  tiempo_sec();
}

/*Reloj*/
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

  /*FullScreen*/
function GoInFullscreen(element) {
  if(element.requestFullscreen)
    element.requestFullscreen();
  else if(element.mozRequestFullScreen)
    element.mozRequestFullScreen();
  else if(element.webkitRequestFullscreen)
    element.webkitRequestFullscreen();
  else if(element.msRequestFullscreen)
    element.msRequestFullscreen();
}

/*Salir de FullScreen */
function GoOutFullscreen() {
  if(document.exitFullscreen)
    document.exitFullscreen();
  else if(document.mozCancelFullScreen)
    document.mozCancelFullScreen();
  else if(document.webkitExitFullscreen)
    document.webkitExitFullscreen();
  else if(document.msExitFullscreen)
    document.msExitFullscreen();
}

/* Verifica si esta en FullScreen */
function IsFullScreenCurrently() {
  var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
  if(full_screen_element === null)
    return false;
  else
    return true;
}

$("#goFullScreen").on('click', function() {
  if(IsFullScreenCurrently())
    GoOutFullscreen();
  else
    GoInFullscreen($("#content").get(0));
});

$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
  if(IsFullScreenCurrently()) {
    $("#goFullScreen").text('Salir FullScreen');
  }
  else {
    $("#goFullScreen").text('FullScreen');
  }
});