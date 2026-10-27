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
  { casilla: 20, fichas: { A: { x: 348, y: 507 }, B: { x: 283, y: 508 } } },
  { casilla: 21, fichas: { A: { x: 311, y: 447 }, B: { x: 265, y: 456 } } },
  { casilla: 22, fichas: { A: { x: 312, y: 365 }, B: { x: 318, y: 336 } } },
  { casilla: 23, fichas: { A: { x: 311, y: 270 }, B: { x: 323, y: 282 } } },
  { casilla: 24, fichas: { A: { x: 397, y: 251 }, B: { x: 396, y: 261 } } },
  { casilla: 25, fichas: { A: { x: 470, y: 261 }, B: { x: 477, y: 262 } } },
  { casilla: 26, fichas: { A: { x: 576, y: 250 }, B: { x: 577, y: 253 } } },
  { casilla: 27, fichas: { A: { x: 646, y: 247 }, B: { x: 657, y: 303 } } },
  { casilla: 28, fichas: { A: { x: 658, y: 299 }, B: { x: 649, y: 352 } } },
  { casilla: 29, fichas: { A: { x: 652, y: 354 }, B: { x: 653, y: 418 } } },
  { casilla: 30, fichas: { A: { x: 654, y: 458 }, B: { x: 556, y: 407 } } },
  { casilla: 31, fichas: { A: { x: 564, y: 449 }, B: { x: 477, y: 407 } } },
  { casilla: 32, fichas: { A: { x: 482, y: 411 }, B: { x: 407, y: 405 } } },
  { casilla: 33, fichas: { A: { x: 391, y: 407 }, B: { x: 407, y: 409 } } },
  { casilla: 34, fichas: { A: { x: 390, y: 345 }, B: { x: 412, y: 352 } } },
  { casilla: 35, fichas: { A: { x: 470, y: 316 }, B: { x: 467, y: 351 } } },
  { casilla: 36, fichas: { A: { x: 574, y: 313 }, B: { x: 564, y: 350 } } }
];

const preguntas = [
  { id: 1, pregunta: "¿Qué selección ha ganado más Copas del Mundo en la historia?", respuesta: "Brasil" },
  { id: 2, pregunta: "¿En qué país se disputó el primer Mundial de fútbol en 1930?", respuesta: "Uruguay" },
  { id: 3, pregunta: "¿Quién es el máximo goleador histórico de la Champions League?", respuesta: "Cristiano Ronaldo" },
  { id: 4, pregunta: "¿Qué jugador argentino apodado 'La Pulga' ha ganado 8 Balones de Oro?", respuesta: "Lionel Messi" },
  { id: 5, pregunta: "¿En qué estadio de Londres disputa sus partidos como local el Arsenal FC?", respuesta: "Emirates Stadium" },
  { id: 6, pregunta: "¿Qué selección ganó la Eurocopa disputada en 2021 (Euro 2020)?", respuesta: "Italia" },
  { id: 7, pregunta: "¿Qué mítico jugador brasileño era conocido como 'O Rei'?", respuesta: "Pele" },
  { id: 8, pregunta: "¿Qué club italiano es apodado 'La Vecchia Signora'?", respuesta: "Juventus" },
  { id: 9, pregunta: "¿Qué entrenador dirigió al FC Barcelona durante el famoso 'sextete' de 2009?", respuesta: "Pep Guardiola" },
  { id: 10, pregunta: "¿En qué club alemán militó Robert Lewandowski antes de fichar por el Bayern de Múnich?", respuesta: "Borussia Dortmund" },
  { id: 11, pregunta: "¿Qué selección ganó el Mundial de Catar en 2022?", respuesta: "Argentina" },
  { id: 12, pregunta: "¿En qué estadio juega de local el AC Milan y el Inter de Milán?", respuesta: "San Siro / Giuseppe Meazza" },
  { id: 13, pregunta: "¿Qué futbolista francés fue traspasado del Mónaco al PSG en 2017 por una cifra récord?", respuesta: "Kylian Mbappe" },
  { id: 14, pregunta: "¿Qué equipo inglés es conocido con el apodo de los 'Red Devils'?", respuesta: "Manchester United" },
  { id: 15, pregunta: "¿Qué jugador portugués lució el dorsal 7 en el Manchester United, Real Madrid y Juventus?", respuesta: "Cristiano Ronaldo" },
  { id: 16, pregunta: "¿Qué selección africana fue la primera en llegar a las semifinales de un Mundial (en 2022)?", respuesta: "Marruecos" },
  { id: 17, pregunta: "¿Quién anotó el famoso gol conocido como 'La Mano de Dios' en el Mundial de 1986?", respuesta: "Maradona" },
  { id: 18, pregunta: "¿Qué portero español fue el capitán de la selección campeona del mundo en 2010?", respuesta: "Iker Casillas" },
  { id: 19, pregunta: "¿En qué ciudad se encuentra el estadio Anfield?", respuesta: "Liverpool" },
  { id: 20, pregunta: "¿Qué entrenador apodado 'The Special One' ha dirigido al Oporto, Chelsea, Inter y Real Madrid?", respuesta: "Jose Mourinho" },
  { id: 21, pregunta: "¿Qué club francés ha dominado la Ligue 1 tras la llegada del grupo inversionista QSI?", respuesta: "PSG" },
  { id: 22, pregunta: "¿Qué jugador neerlandés de los años 70 popularizó el 'Fútbol Total' con el Ajax y la selección?", respuesta: "Johan Cruyff" },
  { id: 23, pregunta: "¿En qué país se encuentra el legendario estadio de Maracaná?", respuesta: "Brasil" },
  { id: 24, pregunta: "¿Qué delantero uruguayo lució el dorsal 9 en el Liverpool, FC Barcelona y Atlético de Madrid?", respuesta: "Luis Suarez" },
  { id: 25, pregunta: "¿Qué galardón entrega la revista France Football al mejor jugador del año?", respuesta: "Balon de Oro" },
  { id: 26, pregunta: "¿Qué equipo alemán es conocido como 'Die Werkself' (El equipo de la aspirina)?", respuesta: "Bayer Leverkusen" },
  { id: 27, pregunta: "¿Qué selección venció a Brasil por 7-1 en las semifinales del Mundial de 2014?", respuesta: "Alemania" },
  { id: 28, pregunta: "¿En qué club escocés se vive una feroz rivalidad contra el Rangers conocida como 'Old Firm'?", respuesta: "Celtic" },
  { id: 29, pregunta: "¿Qué jugador galés era famoso por su velocidad en el extremo del Real Madrid y Tottenham?", respuesta: "Gareth Bale" },
  { id: 30, pregunta: "¿Qué país organizó y ganó el Mundial de fútbol de 1998?", respuesta: "Francia" },
  { id: 31, pregunta: "¿Qué centrocampista croata ganó el Balón de Oro en 2018?", respuesta: "Luka Modric" },
  { id: 32, pregunta: "¿Qué trofeo se entrega al ganador de la máxima competición de clubes en Sudamérica?", respuesta: "Copa Libertadores" },
  { id: 33, pregunta: "¿Qué centrocampista español anotó el gol de la victoria en la final del Mundial 2010?", respuesta: "Andres Iniesta" },
  { id: 34, pregunta: "¿En qué liga juega el club Boca Juniors?", respuesta: "Liga Argentina" },
  { id: 35, pregunta: "¿Qué delantero noruego destacó por sus récords goleadores en el Manchester City?", respuesta: "Erling Haaland" },
  { id: 36, pregunta: "¿Qué mítico centrocampista francés marcó dos goles de cabeza en la final del Mundial 1998?", respuesta: "Zinedine Zidane" }
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

function normalizarTexto(texto) {
  return texto
}

btnAvanzar.addEventListener("click", () => {
  const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];

  const respuestaUsuario = prompt(
    `[Turno Ficha ${turnoActual}]\n\nPregunta: ${preguntaAleatoria.pregunta}\n`
  );

  if (respuestaUsuario === null) {
    alert(`Turno cancelado. La Ficha ${turnoActual} no se mueve.`);
    turnoActual = turnoActual === "A" ? "B" : "A";
    return;
  }

  const respUserNorm = normalizarTexto(respuestaUsuario);
  const respCorrectaNorm = normalizarTexto(preguntaAleatoria.respuesta);

  const esCorrecta = respUserNorm !== "" && respCorrectaNorm.includes(respUserNorm);

  if (!esCorrecta) {
    alert(`❌ Respuesta incorrecta o incompleta. La Ficha ${turnoActual} se queda en su casilla.\n\nRespuesta esperada: ${preguntaAleatoria.respuesta}`);
    turnoActual = turnoActual === "A" ? "B" : "A";
    return;
  }

  alert(`¡Correcto! Tirando el dado...`);
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
      console.log(`¡Caíste en la casilla 22! Vas a la (casilla 24).`);
    }, 400);
  }

  if (nuevaCasilla === 25) {
    setTimeout(() => {
      posiciones[fichaEnTurno] = 9;
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

if (contenedorTablero) {
  contenedorTablero.addEventListener("click", (e) => {
    const rect = contenedorTablero.getBoundingClientRect();
    const posX = Math.round(e.clientX - rect.left);
    const posY = Math.round(e.clientY - rect.top);

    console.log(`{ x: ${posX}, y: ${posY} }`);

    if (indicadorCoords) {
      indicadorCoords.textContent = `Último clic -> X: ${posX}, Y: ${posY}`;
    }
  });
}