let contenedorLetras = document.querySelector('.letras');

var lecciones = [
    "ffff jjjj ff jj fff jjj fj fj jjf ffj fff jjj ffj jjf fjfj fffj jjjf ffjj ff jj",
    "dd kk dk dk kd kd ddd kkd ddk dkk kkdd ddkk dddd kkkk ddkk kkdd kdd kddd dk kk",
    "ffff ddd jjjj kkkk df df jk jk jjj fff ddff jjkk kkdd fdfd jkjk dfjk dfjk kkdd jkjk dfdf dfjj jjfd kkjj dfjk ddkd kkdk",
    "ll ss ssll slsl lsssl slls lsll ssl llss ssll slsl llsslsll ssl ssll slsl lsll ll",
    "aaaa ññññ ña añ añañ ññaa aññ aññ añ añ ññaa a ñ a ñ ñaañ ññ aa ññ aa añañañ aa ññ ñ a aa ññ",
    "dad dada ad ada adad sad sada dasad fas fasd dada affa fada fasa saf fdds asdf"
]
let cadena = lecciones[0];
var tamCadena=cadena.length;
//para elegir la lección
var selectLecciones = document.getElementById("lecciones");
selectLecciones.addEventListener("change", detectarSeleccion);
function detectarSeleccion(event) {
    var valorSeleccionado = event.target.value;
    cadena = lecciones[valorSeleccionado];
    tamCadena=cadena.length;
    cargarLetras();
    selectLecciones.blur();
}



function cargarLetras(){
    contador = 0;
  
    contenedorLetras.innerHTML = "";
    let fragmentoTexto = document.createDocumentFragment();
    for (var i = 0; i < cadena.length; i++) {
        let newSpan = document.createElement("SPAN");
        let letra = (cadena.charAt(i) === ' ') ? 'space' : cadena.charAt(i);
        newSpan.classList.add('span__letra', 'letra-'+i, letra);
        newSpan.textContent=cadena.charAt(i);
        fragmentoTexto.appendChild(newSpan);
    }
    contenedorLetras.appendChild(fragmentoTexto)
    //para agregar el marcador a la primera linea---aún falta refactor
    let marcador= document.querySelector('.letra-'+contador);
    marcador.classList.add('marcador');

    clearInterval(intervaloID);
    /*setTimeout(function() {
        clearInterval(intervaloID);
    }, 1000);*/
    reset();
    
}
cargarLetras();



