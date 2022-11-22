//ENTRADA
const email = document.getElementById("txtEmail");
const error = document.getElementById("emailvalidacion");
const btnEnviar=document.getElementById("btnEnviar");
let mensaje=""; 
btnEnviar.onclick = function(){
    let vemail= email.value;
    let arroba =0;
   
    //PROCESO
     arroba=vemail.indexOf("@");
    if( arroba < 0 ){
        mensaje= "Email Invalido"
    }else{
        window.location.replace("pagina1.html")        
        


    }
//  SALIDA
error.innerText=mensaje;

}



