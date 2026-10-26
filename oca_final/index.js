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
  { id: 1, pregunta: "¿En qué año y en qué bar se fundó oficialmente el Valencia FC?", respuesta: "En 1919, en el Bar Torino" },
  { id: 2, pregunta: "¿Quién fue el primer presidente de la historia del Valencia CF?", respuesta: "Octavio Augusto Milego Díaz" },
  { id: 3, pregunta: "¿En qué año se inauguró el estadio de Mestalla?", respuesta: "1923" },
  { id: 4, pregunta: "¿Qué entrenador dirigió al Valencia CF en la conquista de la Recopa de Europa de 1980?", respuesta: "Bernardino Pérez 'Pasieguito'" },
  { id: 5, pregunta: "¿Quién anotó los dos goles del Valencia en la final de la Copa del Rey de 1999 ante el Atlético de Madrid (3-0)?", respuesta: "Claudio 'El Piojo' López (marcó 2) y Gaizka Mendieta" },
  { id: 6, pregunta: "¿Qué guardameta detuvo el penalti decisivo a Mauricio Pellegrino en la final de la Champions de 2001?", respuesta: "Oliver Kahn" },
  { id: 7, pregunta: "¿Quién es el máximo goleador histórico del Valencia CF en partidos oficiales?", respuesta: "Edmundo Suárez 'Mundo'" },
  { id: 8, pregunta: "¿En qué temporada ganó el Valencia CF su primer título de Liga?", respuesta: "1941-42" },
  { id: 9, pregunta: "¿Qué jugador valencianista anotó el gol de la victoria en la final de la Copa del Rey de 2008 ante el Getafe?", respuesta: "Fernando Morientes, Juan Mata y Alexis Ruano (marcaron los tres; el tercero fue Alexis)" },
  { id: 10, pregunta: "¿Quién era el entrenador del Valencia CF cuando se ganó la Copa de la UEFA en Gotemburgo (2004)?", respuesta: "Rafa Benítez" },
  { id: 11, pregunta: "¿Qué mítico delantero argentino fue máximo goleador de la Liga (Pichihi) con el Valencia en las temporadas 1976-77 y 1977-78?", respuesta: "Mario Alberto Kempes" },
  { id: 12, pregunta: "¿Contra qué equipo jugó el Valencia CF la final de la Copa de Ferias de 1962 que acabó ganando?", respuesta: "FC Barcelona" },
  { id: 13, pregunta: "¿Qué futbolista ostenta el récord de más partidos oficiales disputados con la camiseta del Valencia CF?", respuesta: "Fernando Gómez Colomer" },
  { id: 14, pregunta: "¿En qué año descendió el Valencia CF a Segunda División por única vez en su historia moderna?", respuesta: "1986" },
  { id: 15, pregunta: "¿Quién entrenaba al Valencia CF en la temporada del ascenso inmediato de Segunda a Primera División (1986-87)?", respuesta: "Alfredo Di Stéfano" },
  { id: 16, pregunta: "¿Qué jugador del Valencia CF marcó de penalti el 1-0 provisional en la final de la Champions 2001 en Milán?", respuesta: "Gaizka Mendieta" },
  { id: 17, pregunta: "¿Qué equipo derrotó al Valencia CF en la final de la Champions League del año 2000 en París?", respuesta: "Real Madrid" },
  { id: 18, pregunta: "¿Quién marcó el gol del Valencia en la final de la Supercopa de Europa de 2004 ante el Oporto (2-1)?", respuesta: "Rubén Baraja y Marco Di Vaio" },
  { id: 19, pregunta: "¿Qué mítico centrocampista valencianista era apodado 'El Chino'?", respuesta: "Ricardo Arias" },
  { id: 20, pregunta: "¿En qué estadio se jugó la final de la Copa del Rey de 2019 en la que el Valencia venció al Barcelona?", respuesta: "Benito Villamarín (Sevilla)" },
  { id: 21, pregunta: "¿Quién marcó el gol de la victoria en el Camp Nou que dio matemáticamente la Liga 2001-02 al Valencia CF en La Rosaleda/Málaga?", respuesta: "Roberto Ayala y Fábio Aurélio (en Málaga)" },
  { id: 22, pregunta: "¿Qué tres futbolistas formaban la famosa delantera 'eléctrica' de los años 40 junto a Mundo y Gorostiza?", respuesta: "Epi, Amadeo y Asensi" },
  { id: 23, pregunta: "¿Qué portero del Valencia CF ganó el Trofeo Zamora tres temporadas consecutivas (2000-01, 2001-02, 2003-04)?", respuesta: "Santiago Cañizares" },
  { id: 24, pregunta: "¿Quién anotó el gol decisivo en la prórroga de la final de la Supercopa de Europa de 1980 contra el Nottingham Forest?", respuesta: "Fernando Morena" },
  { id: 25, pregunta: "¿En qué club jugaba David Villa antes de fichar por el Valencia CF en el año 2005?", respuesta: "Real Zaragoza" },
  { id: 26, pregunta: "¿Qué defensa central francés jugó en el Valencia entre 2006 y 2010 vistiendo el dorsal 4?", respuesta: "David Albelda llevaba el 6; el central era Alexis Ruano / Roberto Ayala llevó el 4 hasta 2007 (luego David Navarro)" },
  { id: 27, pregunta: "¿Qué futbolista argentino anotó un famoso gol de vaselina a Molina en el Calderón en la Copa del Rey de 1999?", respuesta: "Gaizka Mendieta" },
  { id: 28, pregunta: "¿Quién era el entrenador del Valencia CF en la final de la Copa del Rey de 2019?", respuesta: "Marcelino García Toral" },
  { id: 29, pregunta: "¿Qué internacional serbio fue el delantero centro titular del Valencia a finales de los noventa (autor del gol en el Camp Nou 3-4)?", respuesta: "Goran Vlaović" },
  { id: 30, pregunta: "¿En qué año ganó el Valencia CF la Copa del Rey tras vencer al Real Madrid por 3-1 en La Romareda?", respuesta: "1992 (Final vs Depor fue 1995) / En 1999 fue ante Atlético. En 1979 fue 2-0 al Madrid." },
  { id: 31, pregunta: "¿Qué jugador valencianista llevaba el apodo de 'El Pipo'?", respuesta: "Rubén Baraja" },
  { id: 32, pregunta: "¿Contra qué equipo inglés disputó el Valencia la célebre eliminatoria de cuartos de final de Champions en 2001 con gol de John Carew?", respuesta: "Arsenal" },
  { id: 33, pregunta: "¿Qué extremo zurdo del Valencia CF fue traspasado al Lazio por una cifra récord en el año 2001?", respuesta: "Gaizka Mendieta" },
  { id: 34, pregunta: "¿Qué trofeo veraniego organiza anualmente el Valencia CF en Mestalla desde 1972?", respuesta: "Trofeo Naranja" },
  { id: 35, pregunta: "¿Qué jugador canterano y capitán del Valencia llevaba el dorsal 6 durante la década de los 2000?", respuesta: "David Albelda" },
  { id: 36, pregunta: "¿Qué futbolista anotó el gol del triunfo en el derbi ante el Levante en la inauguración del campo de Algirós?", respuesta: "Arturo Montesinos 'Montes'" }
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