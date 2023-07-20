let contador=0;
//solo para el marcador
let marcador= document.querySelector('.letra-'+contador);
marcador.classList.add('marcador');
//para pintar la tecla siguiente---obteniendo el id que es una letra del teclado
let teclado = document.querySelector('#'+marcador.textContent)
teclado.classList.add('teclaSiguiente')
let teclaAnterior=teclado;

//==============para puntaje===============
let iniciarReloj=false;
var intervaloID;
//=============================Evento key==========================
document.addEventListener("keydown", e =>{

    if(!iniciarReloj){
        intervaloID = setInterval(repetirCadaSegundo, 1);
        iniciarReloj = true;
    } 
    let unaLetra = document.querySelector('.letra-'+contador);
    if(cadena.charAt(contador)==e.key){
        //solo el audio
        const music = new Audio('src/correcto.mp3');
        music.play();
        //=============
        unaLetra.classList.add('correcto');
    }else{
        //solo el audio
        const music = new Audio('src/error.mp3');
        music.play();
        //=============
        unaLetra.classList.add('error');
        // velocidad-=1;
        contarError();
    }

    contador++;

    if(tamCadena!=contador){
        marcador= document.querySelector('.letra-'+contador);
        marcador.classList.add('marcador')
        //pintar la tecla a presionar
        if(marcador.textContent==" "){
            teclado=document.querySelector('#space');
            //teclado.style.fill = "blue";
            teclado.classList.add('teclaSiguiente')
        }else{
            teclado = document.querySelector('#'+marcador.textContent)
            //teclado.style.fill = "blue";
            teclado.classList.add('teclaSiguiente')
        }

        //borrando del anterior
        marcadorBorrar= document.querySelector('.letra-'+(contador-1));
        marcadorBorrar.classList.remove('marcador');

        if(teclaAnterior.id != teclado.id){
            teclaAnterior.classList.remove('teclaSiguiente');
            teclaAnterior=teclado;
        } 
    }else{

        clearInterval(intervaloID);
    }
});
//=================puntución=============================
let domError = document.querySelector('.errores')
let domVelo = document.querySelector('.velo')
let error = 0;
function contarError(){
    error++;
    domError.textContent = error;
}
var miliSegundos = 0;
var segundos = 0;
var velocidadFinal = 0;

function reset(){
    iniciarReloj=false;
    error=0;
    miliSegundos = 0;
    segundos = 0;
    velocidadFinal = 0;
    domVelo.textContent = '00:000';
    domError.textContent = '0'
}

function repetirCadaSegundo() {
    miliSegundos ++;
    if(miliSegundos == 250){
        miliSegundos = 0;
        segundos ++;
    }
    if(segundos<10){
        if(miliSegundos<10){
            domVelo.textContent = '0'+segundos+':00'+miliSegundos;
        }else if(miliSegundos<100){
            domVelo.textContent = '0'+segundos+':0'+miliSegundos;
        }else{
            domVelo.textContent = '0'+segundos+':'+miliSegundos;
        }
    }else{
        if(miliSegundos<10){
            domVelo.textContent = segundos+':00'+miliSegundos;
        }else if(miliSegundos<100){
            domVelo.textContent = segundos+':0'+miliSegundos;
        }else{
            domVelo.textContent = segundos+':'+miliSegundos;
        }
    }    
    //console.log(segundos + " : " + miliSegundos)
 }

 //=========================reiniciar========================================
 var btnReiniciar = document.querySelector('#btn_reiniciar');
 btnReiniciar.addEventListener('click',(e)=>{
    //location.reload();
    e.preventDefault();
    cargarLetras();
    btnReiniciar.blur();
 })