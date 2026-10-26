console.log("Hello World")
let nomJugador = 'Jugador: Ivan';
const MAX_TIRADAS = 1;
document.querySelector("#nombre").innerHTML = nomJugador;
function sumar(a, b){
    return a + b;
}

document.querySelector("#boton1").addEventListener("click", function(e){
    e.preventDefault();
    let res = sumar(1, 2);
    document.querySelector("#resultado_suma").innerHTML = res;
}); 

function multi(a, b){
    return a * b;
}

document.querySelector("#boton2").addEventListener("click", function(e){
    e.preventDefault();
    let res = multi(2, 2);
    document.querySelector("#resultado_multi").innerHTML = res;
}); 

document.querySelector("#conf").addEventListener("click", function(e){
    e.preventDefault();
    let numero = document.querySelector("#numero").value;
    console.log(numero);
    if(numero < 0){
        document.querySelector("#mensaje").innerHTML = "El numero no puede ser negativo";
    }
    else if(numero >= 0 && numero < 10){
        document.querySelector("#mensaje").innerHTML = "";
        for(let b = 1; b <= 10; b++){
            let res = numero * b;
            document.querySelector("#tablas").innerHTML += numero + " x " + b + " = " + res + "<br>";
        }
    }
    else{
        document.querySelector("#mensaje").innerHTML = "El numero no puede ser mayor que 10";
    }
});

let estat = "inici";

document.querySelector("#inicio").addEventListener("click", function() {
    estat = "inici";

    switch (estat) {
        case "inici":
            console.log("El joc està començant");
            break;
        case "turnoA":
            console.log("És el torn del jugador A");
            break;
        case "turnoB":
            console.log("És el torn del jugador B");
            break;
        case "final":
            console.log("El joc ha finalitzat");
            break;
    }
});

document.querySelector("#turnoa").addEventListener("click", function() {
    estat = "turnoa";

    switch (estat) {
        case "inici":
            console.log("El joc està començant");
            break;
        case "turnoa":
            console.log("És el torn del jugador A");
            break;
        case "turnob":
            console.log("És el torn del jugador B");
            break;
        case "final":
            console.log("El joc ha finalitzat");
            break;
    }
});

document.querySelector("#turnob").addEventListener("click", function() {
    estat = "turnob";

    switch (estat) {
        case "inici":
            console.log("El joc està començant");
            break;
        case "turnoa":
            console.log("És el torn del jugador A");
            break;
        case "turnob":
            console.log("És el torn del jugador B");
            break;
        case "final":
            console.log("El joc ha finalitzat");
            break;
    }
});

document.querySelector("#final").addEventListener("click", function() {
    estat = "final";

    switch (estat) {
        case "inici":
            console.log("El joc està començant");
            break;
        case "turnoa":
            console.log("És el torn del jugador A");
            break;
        case "turnob":
            console.log("És el torn del jugador B");
            break;
        case "final":
            console.log("El joc ha finalitzat");
            break;
    }
});

document.querySelector("#nombre").textContent = "Jugador: Pepe";
document.querySelector("#nombre").classList.add("tablas");

document.querySelector("#dado").addEventListener("click", function() {
    let dau = Math.floor(Math.random() * 6) + 1;
    switch (estat){
        case "turnoa":
            document.querySelector("#dados").innerHTML = "El jugador A ha tret " + dau;

            document.querySelector("#lanzar").innerHTML = "Torn del jugador B";
            break;
        case "turnob":
            document.querySelector("#dados").innerHTML = "El jugador B ha tret " + dau;
            document.querySelector("#lanzar").innerHTML = "Torn del jugador A";
    }
    const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];
    const tirada = dau;
    const nomCasella = caselles[tirada];
    console.log(nomCasella);
    document.querySelector("#mensaje1").innerHTML = "Has caigut a: " + caselles[tirada];
});

document.querySelector("#nom").addEventListener("click", function(e) {
    e.preventDefault();
    let nombre = document.querySelector("#noms").value;
    document.querySelector("#nombre").textContent = "Jugador 1: " + nombre;
});

let preguntas = [
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Nilo", "Amazonas", "Misisipi"],
        correcta: "Amazonas"
    },
    {
        pregunta: "¿En qué año llegó el ser humano a la Luna?",
        respuestas: ["1969", "1975", "1961"],
        correcta: "1969"
    },
    {
        pregunta: "¿Quién pintó La noche estrellada?",
        respuestas: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correcta: "Vincent van Gogh"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Saturno", "Júpiter", "Neptuno"],
        correcta: "Júpiter"
    },
    {
        pregunta: "¿Cuál es el océano más grande de la Tierra?",
        respuestas: ["Atlántico", "Índico", "Pacífico"],
        correcta: "Pacífico"
    },
    {
        pregunta: "¿A qué país pertenece la isla de Groenlandia?",
        respuestas: ["Dinamarca", "Canadá", "Noruega"],
        correcta: "Dinamarca"
    },
    {
        pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
        respuestas: ["Fémur", "Tibia", "Húmero"],
        correcta: "Fémur"
    }
];

let mostrar = document.querySelector("#preguntas");
let resultat = document.querySelector("#result"); 

document.querySelector("#btn_mostrar").addEventListener("click", function(e) {
    e.preventDefault();

    resultat.innerHTML = "";
    mostrar.innerHTML = `<h3>${preguntas[0].pregunta}</h3>`;

    for (let i = 0; i < preguntas[0].respuestas.length; i++) {
        mostrar.innerHTML += `
            <button onclick="comprovar('${preguntas[0].respuestas[i]}')">
                ${preguntas[0].respuestas[i]}
            </button>
        `;
    }
});

function comprovar(respostaSeleccionada) {
    if (respostaSeleccionada === preguntas[0].correcta) {
        resultat.innerHTML = "Correcte!";
    } else {
        resultat.innerHTML = "Incorrecte";
    }
}

let PreguntaActual = 0;

document.querySelector("#sig_mostrar").addEventListener("click", function(e) {
    e.preventDefault();

    resultat.innerHTML = "";
    PreguntaActual++;

    let preguntaActual = preguntas[PreguntaActual];

    mostrar.innerHTML = `<h3>${preguntaActual.pregunta}</h3>`;

    for (let i = 0; i < preguntaActual.respuestas.length; i++) {
        mostrar.innerHTML += `
            <button onclick="comprovar('${preguntaActual.respuestas[i]}')">
                ${preguntaActual.respuestas[i]}
            </button>
        `;
    }
});

function comprovar(respostaSeleccionada) {
    let preguntaActual = preguntas[PreguntaActual];

    if (respostaSeleccionada === preguntaActual.correcta) {
        resultat.innerHTML = "Correcte!";
    } else {
        resultat.innerHTML = "Incorrecte";
    }
}


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
        document.querySelector("#tablero").innerHTML += tablero [i][j] + " ";
    }
    document.querySelector("#tablero").innerHTML += "<br>";
}

const jugadorA = {
    nom: "A",
    posicio: 0,
    activat: true
};

const jugadorB = {
    nom: "B",
    posicio: 0,
    activat: true
};

function tirarDado() {

    let dau = Math.floor(Math.random() * 6) + 1;

    jugadorA.posicio = jugadorA.posicio + dau;

    document.querySelector("#dados").innerHTML = "El jugador " + jugadorA.nom + " ha tret " + dau;
}

document.querySelector("#dado").addEventListener("click", tirarDado);