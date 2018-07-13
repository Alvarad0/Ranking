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
  