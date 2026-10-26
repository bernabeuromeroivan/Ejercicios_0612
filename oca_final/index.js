const tablero = [
  { casilla: 0, fichas: { A: { x: 180, y: 595 }, B: { x: 115, y: 598 } } },
  { casilla: 1, fichas: { A: { x: 183, y: 540 }, B: { x: 135, y: 540 } } },
  { casilla: 2, fichas: { A: { x: 184, y: 463 }, B: { x: 143, y: 463 } } },
  { casilla: 3, fichas: { A: { x: 213, y: 385 }, B: { x: 160, y: 360 } } },
  { casilla: 4, fichas: { A: { x: 205, y: 318 }, B: { x: 160, y: 310 } } },
  { casilla: 5, fichas: { A: { x: 210, y: 240 }, B: { x: 210, y: 240 } } },
  { casilla: 6, fichas: { A: { x: 229, y: 171 }, B: { x: 198, y: 157 } } },
  { casilla: 7, fichas: { A: { x: 329, y: 172 }, B: { x: 294, y: 149 } } },
  { casilla: 8, fichas: { A: { x: 392, y: 178 }, B: { x: 408, y: 141 } } },
  { casilla: 9, fichas: { A: { x: 464, y: 179 }, B: { x: 484, y: 141 } } },
  { casilla: 10, fichas: { A: { x: 558, y: 170 }, B: { x: 570, y: 145 } } },
  { casilla: 11, fichas: { A: { x: 642, y: 165 }, B: { x: 642, y: 144 } } },
  { casilla: 12, fichas: { A: { x: 734, y: 183 }, B: { x: 768, y: 154 } } },
  { casilla: 13, fichas: { A: { x: 752, y: 248 }, B: { x: 795, y: 237 } } },
  { casilla: 14, fichas: { A: { x: 763, y: 355 }, B: { x: 803, y: 316 } } },
  { casilla: 15, fichas: { A: { x: 770, y: 424 }, B: { x: 818, y: 410 } } },
  { casilla: 16, fichas: { A: { x: 775, y: 504 }, B: { x: 831, y: 534 } } },
  { casilla: 17, fichas: { A: { x: 668, y: 508 }, B: { x: 676, y: 552 } } },
  { casilla: 18, fichas: { A: { x: 557, y: 513 }, B: { x: 574, y: 508 } } },
  { casilla: 19, fichas: { A: { x: 439, y: 514 }, B: { x: 436, y: 506 } } },
  { casilla: 20, fichas: { A: { x: 348, y: 507 }, B: { x: 345, y: 508 } } },
  { casilla: 21, fichas: { A: { x: 311, y: 447 }, B: { x: 309, y: 445 } } },
  { casilla: 22, fichas: { A: { x: 312, y: 365 }, B: { x: 318, y: 336 } } },
  { casilla: 23, fichas: { A: { x: 311, y: 270 }, B: { x: 323, y: 282 } } },
  { casilla: 24, fichas: { A: { x: 397, y: 251 }, B: { x: 396, y: 261 } } },
  { casilla: 25, fichas: { A: { x: 470, y: 261 }, B: { x: 477, y: 262 } } },
  { casilla: 26, fichas: { A: { x: 576, y: 250 }, B: { x: 645, y: 253 } } },
  { casilla: 27, fichas: { A: { x: 646, y: 247 }, B: { x: 657, y: 303 } } },
  { casilla: 28, fichas: { A: { x: 658, y: 299 }, B: { x: 649, y: 352 } } },
  { casilla: 29, fichas: { A: { x: 652, y: 354 }, B: { x: 653, y: 418 } } },
  { casilla: 30, fichas: { A: { x: 654, y: 458 }, B: { x: 556, y: 407 } } },
  { casilla: 31, fichas: { A: { x: 564, y: 449 }, B: { x: 477, y: 407 } } },
  { casilla: 32, fichas: { A: { x: 482, y: 411 }, B: { x: 407, y: 405 } } },
  { casilla: 33, fichas: { A: { x: 391, y: 407 }, B: { x: 407, y: 409 } } },
  { casilla: 34, fichas: { A: { x: 390, y: 345 }, B: { x: 412, y: 352 } } },
  { casilla: 35, fichas: { A: { x: 470, y: 316 }, B: { x: 467, y: 351 } } },
  { casilla: 36, fichas: { A: { x: 574, y: 313 }, B: { x: 579, y: 358 } } }
];

const preguntas = [
  { id: 1, pregunta: "¿Qué futbolista fue el primer ganador del Balón de Oro en 1956?", respuesta: "Stanley Matthews" },
  { id: 2, pregunta: "¿Qué jugador ostenta el récord de más goles marcados en un solo partido de un Mundial (5 goles en 1994)?", respuesta: "Oleg Salenko" },
  { id: 3, pregunta: "¿En qué club jugaba Roberto Baggio cuando falló el penalti decisivo en la final del Mundial de 1994?", respuesta: "Juventus" },
  { id: 4, pregunta: "¿Qué selección ganó la Copa América de 2001 sin encajar un solo gol en todo el torneo?", respuesta: "Colombia" },
  { id: 5, pregunta: "¿Qué único equipo ha ganado la Champions League habiendo accedido al torneo mediante la fase previa de la Copa de Europa como campeón de un país sin plaza directa?", respuesta: "Estrella Roja de Belgrado" },
  { id: 6, pregunta: "¿Quién era el entrenador del Nottingham Forest que ganó dos Copas de Europa consecutivas?", respuesta: "Brian Clough" },
  { id: 7, pregunta: "¿Quién fue el primer árbitro en mostrar una tarjeta roja en la historia de los Mundiales (1974)?", respuesta: "Doğan Babacan" },
  { id: 8, pregunta: "¿Qué futbolista disputó la final del Mundial de 1930 con Argentina y la de 1934 con Italia?", respuesta: "Luis Monti" },
  { id: 9, pregunta: "¿Qué club ostenta el récord de más partidos consecutivos sin perder en la historia de las cinco grandes ligas europeas (58 partidos)?", respuesta: "AC Milan" },
  { id: 10, pregunta: "¿En qué estadio se jugó la final de la Copa del Mundo de 1966?", respuesta: "Wembley" },
  { id: 11, pregunta: "¿Quién es el máximo goleador histórico en una sola edición de la Copa del Mundo (13 goles en 1958)?", respuesta: "Just Fontaine" },
  { id: 12, pregunta: "¿Qué club ganó la primera edición de la Copa de Ferias en 1958?", respuesta: "Selección de Barcelona (FC Barcelona)" },
  { id: 13, pregunta: "¿Qué jugador disputó 1.047 partidos oficiales con el mismo club de la Premier League?", respuesta: "Ryan Giggs" },
  { id: 14, pregunta: "¿En qué año se introdujo oficialmente la regla del cesión (prohibición al portero de coger la pelota con las manos tras pase de un compañero)?", respuesta: "1992" },
  { id: 15, pregunta: "¿Quién anotó el gol de la victoria para Grecia en la final de la Eurocopa 2004?", respuesta: "Angelos Charisteas" },
  { id: 16, pregunta: "¿Qué club italiano ganó la Recopa de Europa en la temporada 1998-1999 (la última edición disputada)?", respuesta: "Lazio" },
  { id: 17, pregunta: "¿Qué entrenador tiene el récord de haber dirigido en 5 ediciones distintas de la Copa del Mundo con 5 selecciones diferentes?", respuesta: "Bora Milutinović" },
  { id: 18, pregunta: "¿Qué futbolista ganó el Balón de Oro en 1995 siendo el primer no europeo en conseguirlo?", respuesta: "George Weah" },
  { id: 19, pregunta: "¿En qué club brasileño jugaba Kaká antes de dar el salto a Europa fichando por el AC Milan?", respuesta: "São Paulo" },
  { id: 20, pregunta: "¿Qué jugador ostenta el récord del gol más rápido en la historia de los Mundiales (11 segundos)?", respuesta: "Hakan Şükür" },
  { id: 21, pregunta: "¿Qué equipo derrotó al Barcelona en la final de la Copa de Europa de 1986 en la tanda de penaltis?", respuesta: "Steaua de Bucarest" },
  { id: 22, pregunta: "¿Quién anotó el hat-trick más rápido en la historia de la Premier League (en 2 minutos y 56 segundos)?", respuesta: "Sadio Mané" },
  { id: 23, pregunta: "¿Qué selección nacional disputó el famoso 'Partido de la Muerte' contra oficiales alemanes en 1942?", respuesta: "FC Start (representando a Kiev / Ucrania)" },
  { id: 24, pregunta: "¿Qué jugador fue apodado 'La Saeta Rubia'?", respuesta: "Alfredo Di Stéfano" },
  { id: 25, pregunta: "¿Qué país africano fue el primero en alcanzar los cuartos de final de un Mundial (1990)?", respuesta: "Camerún" },
  { id: 26, pregunta: "¿Quién fue el portero titular de la selección de Francia en el Mundial de 1998?", respuesta: "Fabien Barthez" },
  { id: 27, pregunta: "¿En qué edición de la Eurocopa participó la selección del 'CEI' (Comunidad de Estados Independientes)?", respuesta: "1992" },
  { id: 28, pregunta: "¿Qué club argentino ganó la Copa Intercontinental de 1968 tras vencer al Manchester United en Old Trafford?", respuesta: "Estudiantes de La Plata" },
  { id: 29, pregunta: "¿Qué jugador fue expulsado en su debut con la selección de Argentina tras jugar solo 47 segundos?", respuesta: "Lionel Messi" },
  { id: 30, pregunta: "¿Quién anotó el gol decisivo en la final de la Champions League 2001 entre Bayern Múnich y Valencia en la tanda de penaltis?", respuesta: "Thomas Linke (marcó el penalti final) / Mauricio Pellegrino (falló por el Valencia)" },
  { id: 31, pregunta: "¿Qué futbolista ostenta el récord de más goles marcados en la historia de la Eurocopa (fase final)?", respuesta: "Cristiano Ronaldo" },
  { id: 32, pregunta: "¿Qué equipo inglés ostenta el récord de imbatibilidad más largo en la historia de su liga (49 partidos)?", respuesta: "Arsenal" },
  { id: 33, pregunta: "¿En qué estadio se jugó la final de la Liga de Campeones de 1999 entre Manchester United y Bayern Múnich?", respuesta: "Spotify Camp Nou" },
  { id: 34, pregunta: "¿Qué jugador ganó la Champions League con el Ajax (1995), Real Madrid (1998) y AC Milan (2003 y 2007)?", respuesta: "Clarence Seedorf" },
  { id: 35, pregunta: "¿Quién era el capitán de la selección de Alemania Occidental que levantó la Copa del Mundo en 1990?", respuesta: "Lothar Matthäus" },
  { id: 36, pregunta: "¿Qué equipo de fútbol fue fundado bajo el nombre de 'Dial Square' en 1886?", respuesta: "Arsenal" }
];

const btnAvanzar = document.querySelector("#btnAvanzar");
const fichaA = document.querySelector("#ficha-A");
const fichaB = document.querySelector("#ficha-B");

const posiciones = {
  A: 0,
  B: 0
};

let turnoActual = "A";

function moverFichaVisual(nombreFicha) {
  const numCasilla = posiciones[nombreFicha];
  const datosCasilla = tablero[numCasilla];
  const coords = datosCasilla.fichas[nombreFicha];

  const elementoFicha = document.querySelector(`#ficha-${nombreFicha}`);

  elementoFicha.style.left = `${coords.x}px`;
  elementoFicha.style.top = `${coords.y}px`;
}

moverFichaVisual("A");
moverFichaVisual("B");

btnAvanzar.addEventListener("click", () => {
  const dado = Math.floor(Math.random() * 6) + 1;
  let nuevaCasilla = posiciones[turnoActual] + dado;

  if (nuevaCasilla >= tablero.length) {
    nuevaCasilla = tablero.length - 1;
    console.log(`¡La Ficha ${turnoActual} ha llegado a la casilla final!`);
  } else {
    console.log(`Ficha ${turnoActual} saca ${dado} y avanza a casilla ${nuevaCasilla}`);
  }

  posiciones[turnoActual] = nuevaCasilla;
  moverFichaVisual(turnoActual);

  const fichaEnTurno = turnoActual;

if (nuevaCasilla === 2) {
    setTimeout(() => {
      posiciones[fichaEnTurno] = 21;
      moverFichaVisual(fichaEnTurno);
      console.log(`¡De la casilla 2 saltas a la 21!`);
    }, 400);
}


if (nuevaCasilla === 7) {
    setTimeout(() => {
        posiciones[fichaEnTurno] = 11;
        moverFichaVisual(fichaEnTurno);
        console.log(`¡De la casilla 7 saltas a la 11!`);
    }, 400);
}

if (nuevaCasilla === 12) {
    setTimeout(() => {
      posiciones[fichaEnTurno] = 0;
      moverFichaVisual(fichaEnTurno);
      console.log(`¡Caíste en la casilla 12! Vuelves al inicio (casilla 0).`);
    }, 400);
}

if (nuevaCasilla === 14) {
    setTimeout(() => {
      posiciones[fichaEnTurno] = 29;
      moverFichaVisual(fichaEnTurno);
      console.log(`¡Caíste en la casilla 14! Vas a la (casilla 29).`);
    }, 400);
}

if (nuevaCasilla === 22) {
    setTimeout(() => {
        posiciones[fichaEnTurno] = 24;
        moverFichaVisual(fichaEnTurno);
        console.log(`¡Caíste en la casilla 14! Vas a la (casilla 29).`);
    }, 400);
}

if (nuevaCasilla === 25) {
    setTimeout(() => {
        posiciones[fichaEnTurno] = 24;
        moverFichaVisual(fichaEnTurno);
        console.log(`¡Caíste en la casilla 25! Vuelves a la (casilla 9).`);
    }, 400);
}

if (nuevaCasilla === 30) {
    setTimeout(() => {
      posiciones[fichaEnTurno] = 27;
      moverFichaVisual(fichaEnTurno);
      console.log(`¡Caíste en la casilla 30! Vuelves a la (casilla 27).`);
    }, 400);
}

if (nuevaCasilla === 33) {
    setTimeout(() => {
      posiciones[fichaEnTurno] = 20;
      moverFichaVisual(fichaEnTurno);
      console.log(`¡Caíste en la casilla 33! Vuelves a la (casilla 20).`);
    }, 400);
}

  turnoActual = turnoActual === "A" ? "B" : "A";
});

const contenedorTablero = document.querySelector("#tablero");
const indicadorCoords = document.querySelector("#coordenadas");

contenedorTablero.addEventListener("click", (e) => {
  const rect = contenedorTablero.getBoundingClientRect();
  const posX = Math.round(e.clientX - rect.left);
  const posY = Math.round(e.clientY - rect.top);

  console.log(`{ x: ${posX}, y: ${posY} }`);

  if (indicadorCoords) {
    indicadorCoords.textContent = `Último clic -> X: ${posX}, Y: ${posY}`;
  }
});