console.log("Hello World");

let nomJugador = 'Jugador: Ivan';
const MAX_TIRADAS = 1;
document.querySelector("#nombre").innerHTML = nomJugador;
document.querySelector("#nombre").classList.add("tablas");

let ara = new Date();
let dia = ara.getDate();
let mes = ara.getMonth() + 1;
let any = ara.getFullYear();
let dataPartida = dia + "/" + mes + "/" + any;
document.querySelector(".fecha").innerHTML = "Partida iniciada: " + dataPartida;

function sumar(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b;
}

document.querySelector("#boton1").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#resultado_suma").innerHTML = sumar(1, 2);
});

document.querySelector("#boton2").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#resultado_multi").innerHTML = multi(2, 2);
});

document.querySelector("#nom").addEventListener("click", function(e) {
    e.preventDefault();
    let nombre = document.querySelector("#noms").value;
    document.querySelector("#nombre").textContent = "Jugador 1: " + nombre.toUpperCase();
});

document.querySelector("#conf").addEventListener("click", function(e) {
    e.preventDefault();
    let numero = document.querySelector("#numero").value;
    
    if (numero < 0) {
        document.querySelector("#mensaje").innerHTML = "El numero no puede ser negativo";
    } else if (numero >= 0 && numero <= 10) {
        document.querySelector("#mensaje").innerHTML = "";
        document.querySelector("#tablas").innerHTML = "";
        for (let b = 1; b <= 10; b++) {
            document.querySelector("#tablas").innerHTML += numero + " x " + b + " = " + (numero * b) + "<br>";
        }
    } else {
        document.querySelector("#mensaje").innerHTML = "El numero no puede ser mayor que 10";
    }
});

let estat = "inici";

document.querySelector("#inicio").addEventListener("click", function() {
    estat = "inici";
    console.log("El joc està començant");
});

document.querySelector("#turnoa").addEventListener("click", function() {
    estat = "turnoa";
    console.log("És el torn del jugador A");
});

document.querySelector("#turnob").addEventListener("click", function() {
    estat = "turnob";
    console.log("És el torn del jugador B");
});

document.querySelector("#final").addEventListener("click", function() {
    estat = "final";
    console.log("El joc ha finalitzat");
});

const jugadorA = { nom: "A", posicio: 0, activat: true };
const jugadorB = { nom: "B", posicio: 0, activat: true };

const casellesEspecials = {
    4: "Avança a la 9",
    11: "Torna a la sortida",
    16: "Perd el torn"
};

const partida = {
    torn: "A",
    jugadors: [jugadorA, jugadorB],
    guanyador: null,
    ultimaTirada: null
};

function actualitzarJSON() {
    let panelJson = document.querySelector("#panel-json");
    if (panelJson) {
        panelJson.textContent = JSON.stringify(partida, null, 2);
    }
}
actualitzarJSON();

const tirarDau = () => Math.floor(Math.random() * 6) + 1;
const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];

document.querySelector("#dado").addEventListener("click", function() {
    let dau = tirarDau();
    partida.ultimaTirada = dau;

    if (partida.torn === "A") {
        jugadorA.posicio += dau;
        document.querySelector("#dados").innerHTML = "El jugador A ha tret " + dau;
        document.querySelector("#lanzar").innerHTML = "Torn del jugador B";
        partida.torn = "B";
    } else {
        jugadorB.posicio += dau;
        document.querySelector("#dados").innerHTML = "El jugador B ha tret " + dau;
        document.querySelector("#lanzar").innerHTML = "Torn del jugador A";
        partida.torn = "A";
    }

    document.querySelector("#mensaje1").innerHTML = "Has caigut a: " + caselles[dau % caselles.length];
    actualitzarJSON();
});

const tablero = [
    [6, 7, 8, 9, 10, 11, 12],
    [5, 23, 24, 25, 26, 27, 13],
    [4, 22, 34, 35, 36, 28, 14],
    [3, 21, 33, 32, 31, 29, 15],
    [2, 20, 19, 18, 17, 16],
    [1]
];

for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
        document.querySelector("#tablero").innerHTML += tablero[i][j] + " ";
    }
    document.querySelector("#tablero").innerHTML += "<br>";
}

let preguntas = [
    { pregunta: "¿Cuál es el río más largo del mundo?", respuestas: ["Nilo", "Amazonas", "Misisipi"], correcta: "Amazonas" },
    { pregunta: "¿En qué año llegó el ser humano a la Luna?", respuestas: ["1969", "1975", "1961"], correcta: "1969" },
    { pregunta: "¿Quién pintó La noche estrellada?", respuestas: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet"], correcta: "Vincent van Gogh" }
];

let PreguntaActual = 0;
let mostrar = document.querySelector("#preguntas");
let resultat = document.querySelector("#result");

document.querySelector("#btn_mostrar").addEventListener("click", function(e) {
    e.preventDefault();
    PreguntaActual = 0;
    mostrarPregunta();
});

document.querySelector("#sig_mostrar").addEventListener("click", function(e) {
    e.preventDefault();
    if (PreguntaActual < preguntas.length - 1) {
        PreguntaActual++;
        mostrarPregunta();
    }
});

function mostrarPregunta() {
    resultat.innerHTML = "";
    let p = preguntas[PreguntaActual];
    mostrar.innerHTML = "<h3>" + p.pregunta + "</h3>";
    for (let i = 0; i < p.respuestas.length; i++) {
        mostrar.innerHTML += `<button onclick="comprovar('${p.respuestas[i]}')">${p.respuestas[i]}</button> `;
    }
}

function comprovar(resposta) {
    if (resposta === preguntas[PreguntaActual].correcta) {
        resultat.innerHTML = "Correcte!";
    } else {
        resultat.innerHTML = "Incorrecte";
    }
}