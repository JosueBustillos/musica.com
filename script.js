var respuesta = 2;
var score = 0;
var max = 20;
var porcentaje = 0;
var errores = 0;
var times = 0;
var estado = true;
var escala;
var lapregunta;
var botones = document.getElementsByClassName('boton');
var boton0 = document.getElementById('0');
var boton1 = document.getElementById('1');
var boton2 = document.getElementById('2');
var boton3 = document.getElementById('3');
var boton4 = document.getElementById('4');
var boton5 = document.getElementById('5');
var boton6 = document.getElementById('6');
var pregunta = document.getElementById('pregunta');
var grado = document.getElementById('grado');
var porcentajelbl = document.getElementById('porcentaje');
var errornum = document.getElementById('errores');
var screen = document.getElementById('final');
var invertir = document.getElementById('invertir');
var aciertos = document.getElementById('aciertos');
var correcto = document.getElementById('correcto');
var incorrecto = document.getElementById('incorrecto');
var swap = document.getElementById('swap');
var dos = new Array ("C", "D", "E", "F", "G", "A", "B");
var dosos = new Array ("C#", "D#", "E#", "F#", "G#", "A#", "B#");
var res = new Array ("D", "E", "F♯", "G", "A", "B", "C♯");
var mibem = new Array ("Eb", "F", "G", "Ab", "Bb", "C", "D");
var mis = new Array ("E", "F♯", "G♯", "A", "B", "C♯", "D♯");
var fas = new Array ("F", "G", "A", "B♭", "C", "D", "E");
var fasos = new Array ("F#", "G#", "A#", "B", "C#", "D#", "E#");
var sols = new Array ("G", "A", "B", "C", "D", "E", "F♯");
var labem = new Array ("Ab", "Bb", "C", "Db", "Eb", "F", "G");
var las = new Array ("A", "B", "C♯", "D", "E", "F♯", "G♯");
var sibem = new Array ("Bb", "C", "D", "Eb", "F", "G", "A");
var sis = new Array ("B", "C#", "D#", "E", "F#", "G#", "A#");
var grados = new Array ("I", "II", "III", "IV", "V", "VI", "VII");
var escalas=[{"name":dos},{"name":dosos},{"name":res},{"name":mibem},{"name":mis},
{"name":fas},{"name":fasos},{"name":sols},{"name":labem},{"name":las},{"name":sibem},{"name":sis}];

boton0.addEventListener("click", eventHandlerFactory(boton0.id));
boton1.addEventListener("click", eventHandlerFactory(boton1.id));
boton2.addEventListener("click", eventHandlerFactory(boton2.id));
boton3.addEventListener("click", eventHandlerFactory(boton3.id));
boton4.addEventListener("click", eventHandlerFactory(boton4.id));
boton5.addEventListener("click", eventHandlerFactory(boton5.id));
boton6.addEventListener("click", eventHandlerFactory(boton6.id));
screen.addEventListener("click", close);
invertir.addEventListener("click", intercambiar);

generar();

function eventHandlerFactory (id) { 
  return function executeOnEvent (event) {
    var Laid = id;
    if (Laid == respuesta) {
        correcto.pause();
        correcto.currentTime = 0
        correcto.play();
        score ++
        aciertos.innerHTML = score;
        if (score == max) {
            ganaste();
        }
        else {

        }
        generar();
    }
    else {
        errores ++;
        incorrecto.pause();
        incorrecto.currentTime = 0
        incorrecto.play();
        restando();
        generar();    
    }
  }
}

function restando() {
    if (score == 0) {}
    else {score --;aciertos.innerHTML = score;}
}

function intercambiar() {
    swap.pause();
    swap.currentTime = 0;
    swap.play();
    if (estado == true) {
        estado = false;
        for (var i=0;i<botones.length;i++){
            botones[i].innerHTML = escala[i];  
        }
        grado.innerHTML = grados[respuesta];
    }
    else {
        estado = true;
        for (var i=0;i<botones.length;i++){
            botones[i].innerHTML = grados[i];  
        }
        grado.innerHTML = escala[respuesta];
    }
}

function determinar() {
    if (estado == true) {
        grado.innerHTML = escala[respuesta];
    }
    if (estado == false) {
        grado.innerHTML = grados[respuesta];
    }
}

function generar() {
    let esc = Math.floor(Math.random()*12);
    escala = escalas[esc].name;
    lapregunta = escala[0];
    pregunta.innerHTML = lapregunta;
    let num = Math.floor(Math.random()*7);
    if (respuesta == num & respuesta != 0) {
        num --
        respuesta = num;
        determinar();
    }
    else if (respuesta == num & respuesta == 0) {
        num ++
        respuesta = num;
        determinar();
    }
    else if (respuesta != num) {
        respuesta = num
        determinar();
    }
    if (estado == false) {
        for (var i=0;i<botones.length;i++){
            botones[i].innerHTML = escala[i];  
        }
        grado.innerHTML = grados[respuesta];
    }
    else {
        
    }
}

getlocal();

function getlocal() {
    if (localStorage.getItem("3784675")) {
        times = localStorage.getItem("3784675");
    }
    else {
        localStorage.setItem("3784675", times)
    }
}

function ganaste() {
    porcentaje = score - errores;
    porcentajelbl.innerHTML = porcentaje * 100 / score + "%";
    errornum.innerHTML = errores;
    screen.classList.remove("none");
    if (porcentajelbl.innerHTML == "100%") {
        times ++;
        localStorage.setItem("3784675", times);
        if (times == 3) {
            jointoever();
        }
        else {
            
        }
    }
    else {

    }
    score = 0;
    aciertos.innerHTML = score;
}

function close() {
    screen.classList.add("none");
}