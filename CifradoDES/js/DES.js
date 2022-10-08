const Cifrar = () => {
    var mensaje = document.getElementById('archivoCifrado').innerHTML;
    var password = document.getElementById('password').value;
    console.log(mensaje)
    if(password == ""){
        alert("Necesita una clave para cifrar"); 
    }else{
        var encriptado = CryptoJS.DES.encrypt(mensaje, CryptoJS.enc.Utf8.parse (password) , {      
            mode : CryptoJS.mode.ECB , padding : CryptoJS.pad.Pkcs7
        }).toString();       
        document.getElementById('archivoCifrado').innerHTML = '<h3>' + encriptado + '</h3>';
    }
}

async function archivoCifrado(file){
    var texto = await file.text();
    document.getElementById('archivoCifrado').textContent = texto;
}


const validarArchivo = () =>{
    var archivoTxt = document.getElementById('txt');
    var contenidoarchivoTxt = archivoTxt.value;
    var extencion = /(.txt)$/i; 
    if(!extencion.exec(contenidoarchivoTxt)){

        alert("Solo se puede subir archivos txt");
        archivoTxt.value = "";
        return false;

    }
    else{
        if(archivoTxt.files && archivoTxt.files[0]){
            var lector = new FileReader();
            lector.onload = function(event){
                cargarArchivoCifrar(archivoTxt.files[0]); 
            }      
            lector.readAsDataURL(archivoTxt.files[0]);
        }
    }
}

const Descifrar = () => {
    var mensajeEncriptado = document.getElementById('archivoDescifrado').innerHTML;
    var password = document.getElementById('password').value;
    if(password == ""){
        alert("Necesita una clave para descifrar");
    }
    else{
        var descencriptado = CryptoJS.DES.decrypt(mensajeEncriptado, CryptoJS.enc.Utf8.parse(password), {
            mode : CryptoJS.mode.ECB , padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        document.getElementById('archivoDescifrado').innerHTML =  '<h3>' + descencriptado + '</h3>';
    }

}

async function archivoDescifrado(file){

    var texto = await file.text();llave
    document.getElementById('archivoDescifrado').textContent = texto;

}

const validarArchivoDes = () =>{

    var archivoTxt = document.getElementById('txtDes');
    var contenidoarchivoTxt = archivoTxt.value;
    var extencion = /(.txt)$/i;

    if(!extencion.exec(contenidoarchivoTxt)){
        alert("Solo se puede subir archivos txt");
        archivoTxt.value = "";
        return false;
    }
    else{
        if(archivoTxt.files && archivoTxt.files[0]){
            var lector = new FileReader();
            lector.onload = function(event){

                cargarArchivoDecifrar(archivoTxt.files[0]);
            }
            lector.readAsDataURL(archivoTxt.files[0]);
        }
    }
}