const tablero = [
  { casilla: 0, fichas: { A: { x: 180, y: 595 }, B: { x: 115, y: 598 } } },
  { casilla: 1, fichas: { A: { x: 183, y: 540 }, B: { x: 135, y: 540 } } },
  { casilla: 2, fichas: { A: { x: 184, y: 463 }, B: { x: 143, y: 463 } } },
  { casilla: 3, fichas: { A: { x: 213, y: 385 }, B: { x: 160, y: 360 } } },
  { casilla: 4, fichas: { A: { x: 205, y: 318 }, B: { x: 160, y: 310 } } },
  { casilla: 5, fichas: { A: { x: 210, y: 240 }, B: { x: 170, y: 240 } } },
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
  { casilla: 21, fichas: { A: { x: 300, y: 440 }, B: { x: 265, y: 456 } } },
  { casilla: 22, fichas: { A: { x: 312, y: 365 }, B: { x: 318, y: 336 } } },
  { casilla: 23, fichas: { A: { x: 311, y: 270 }, B: { x: 323, y: 282 } } },
  { casilla: 24, fichas: { A: { x: 397, y: 251 }, B: { x: 396, y: 261 } } },
  { casilla: 25, fichas: { A: { x: 470, y: 261 }, B: { x: 477, y: 262 } } },
  { casilla: 26, fichas: { A: { x: 576, y: 250 }, B: { x: 577, y: 253 } } },
  { casilla: 27, fichas: { A: { x: 646, y: 247 }, B: { x: 657, y: 303 } } },
  { casilla: 28, fichas: { A: { x: 658, y: 299 }, B: { x: 649, y: 352 } } },
  { casilla: 29, fichas: { A: { x: 652, y: 354 }, B: { x: 680, y: 350 } } },
  { casilla: 30, fichas: { A: { x: 654, y: 458 }, B: { x: 556, y: 407 } } },
  { casilla: 31, fichas: { A: { x: 564, y: 449 }, B: { x: 477, y: 407 } } },
  { casilla: 32, fichas: { A: { x: 482, y: 411 }, B: { x: 407, y: 405 } } },
  { casilla: 33, fichas: { A: { x: 391, y: 407 }, B: { x: 407, y: 409 } } },
  { casilla: 34, fichas: { A: { x: 390, y: 345 }, B: { x: 412, y: 352 } } },
  { casilla: 35, fichas: { A: { x: 470, y: 316 }, B: { x: 467, y: 351 } } },
  { casilla: 36, fichas: { A: { x: 574, y: 313 }, B: { x: 564, y: 350 } } }
];

const preguntas = [
  { id: 1, pregunta: "¿Qué selección ha ganado más Copas del Mundo de fútbol?", respuesta: "Brasil" },
  { id: 2, pregunta: "¿Cuántos jugadores hay en un equipo de baloncesto en pista?", respuesta: "5" },
  { id: 3, pregunta: "¿En qué país se inventó el tenis de mesa o ping-pong?", respuesta: "Inglaterra" },
  { id: 4, pregunta: "¿Qué tenista ha ganado más títulos de Roland Garros?", respuesta: "Rafael Nadal" },
  { id: 5, pregunta: "¿En qué deporte destacó Michael Jordan?", respuesta: "Baloncesto" },
  { id: 6, pregunta: "¿Cuántos anillos componen el símbolo de los Juegos Olímpicos?", respuesta: "5" },
  { id: 7, pregunta: "¿Qué arte marcial japonés significa 'camino suave'?", respuesta: "Judo" },
  { id: 8, pregunta: "¿Qué atleta jamaicano posee el récord mundial de 100 metros lisos?", respuesta: "Usain Bolt" },
  { id: 9, pregunta: "¿En qué deporte se utiliza la expresión 'strike'?", respuesta: "Bolos" },
  { id: 10, pregunta: "¿Cada cuántos años se celebran los Juegos Olímpicos de Verano?", respuesta: "4" },
  { id: 11, pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "Amazonas" },
  { id: 12, pregunta: "¿Cuál es el país más extenso por superficie del planeta?", respuesta: "Rusia" },
  { id: 13, pregunta: "¿Cuál es la capital de Japón?", respuesta: "Tokio" },
  { id: 14, pregunta: "¿En qué continente se encuentra el desierto del Sahara?", respuesta: "Africa" },
  { id: 15, pregunta: "¿Cuál es la capital de Australia?", respuesta: "Camberra" },
  { id: 16, pregunta: "¿Qué océano baña la costa oeste de América del Sur?", respuesta: "Pacifico" },
  { id: 17, pregunta: "¿Cuál es la montaña más alta del mundo sobre el nivel del mar?", respuesta: "Everest" },
  { id: 18, pregunta: "¿Qué país tiene forma de bota en el mapa de Europa?", respuesta: "Italia" },
  { id: 19, pregunta: "¿Cuál es la capital de Canadá?", respuesta: "Ottawa" },
  { id: 20, pregunta: "¿En qué país se encuentran las ruinas de Machu Picchu?", respuesta: "Peru" },
  { id: 21, pregunta: "¿Cuál es el planeta más cercano al Sol?", respuesta: "Mercurio" },
  { id: 22, pregunta: "¿Qué elemento químico tiene el símbolo 'O'?", respuesta: "Oxigeno" },
  { id: 23, pregunta: "¿Cuál es el animal terrestre más rápido del mundo?", respuesta: "Guepardo" },
  { id: 24, pregunta: "¿Cuántos huesos tiene aproximadamente el cuerpo humano adulto?", respuesta: "206" },
  { id: 25, pregunta: "¿Qué gas absorben las plantas para realizar la fotosíntesis?", respuesta: "Dioxido de carbono" },
  { id: 26, pregunta: "¿Cuál es el mamífero más grande del planeta?", respuesta: "Ballena azul" },
  { id: 27, pregunta: "¿Qué fuerza nos mantiene pegados al suelo en la Tierra?", respuesta: "Gravedad" },
  { id: 28, pregunta: "¿Cuál es el planeta más grande del Sistema Solar?", respuesta: "Jupiter" },
  { id: 29, pregunta: "¿A qué temperatura en grados Celsius hierve el agua a nivel del mar?", respuesta: "100" },
  { id: 30, pregunta: "¿Qué pigmento le da el color verde a las hojas de las plantas?", respuesta: "Clorofila" },
  { id: 31, pregunta: "¿En qué año llegó Cristóbal Colón a América?", respuesta: "1492" },
  { id: 32, pregunta: "¿Quién fue el primer presidente de los Estados Unidos?", respuesta: "George Washington" },
  { id: 33, pregunta: "¿En qué año terminó la Segunda Guerra Mundial?", respuesta: "1945" },
  { id: 34, pregunta: "¿Qué civilización construyó las pirámides de Guiza?", respuesta: "Egipcia" },
  { id: 35, pregunta: "¿En qué ciudad cayó el famoso Muro en 1989?", respuesta: "Berlin" },
  { id: 36, pregunta: "¿Qué emperador francés fue derrotado en la batalla de Waterloo?", respuesta: "Napoleon Bonaparte" },
  { id: 37, pregunta: "¿En qué siglo se produjo la Revolución Francesa (1789)?", respuesta: "Siglo 18" },
  { id: 38, pregunta: "¿Qué importante imperio tenía su capital en Roma?", respuesta: "Imperio Romano" },
  { id: 39, pregunta: "¿Quién escribió la obra 'Don Quijote de la Mancha'?", respuesta: "Miguel de Cervantes" },
  { id: 40, pregunta: "¿Qué físico propuso la Teoría de la Relatividad?", respuesta: "Albert Einstein" },
  { id: 41, pregunta: "¿Quién es el creador y director de la saga 'Star Wars'?", respuesta: "George Lucas" },
  { id: 42, pregunta: "¿Qué actor interpreta a Jack Sparrow en 'Piratas del Caribe'?", respuesta: "Johnny Depp" },
  { id: 43, pregunta: "¿Qué película animada presenta a los personajes Simba, Mufasa y Scar?", respuesta: "El Rey Leon" },
  { id: 44, pregunta: "¿Qué superhéroe de cómic tiene como alter ego a Bruce Wayne?", respuesta: "Batman" },
  { id: 45, pregunta: "¿Cuál es el nombre del ogro verde de la película animada de DreamWorks?", respuesta: "Shrek" },
  { id: 46, pregunta: "¿En qué saga cinematográfica aparece la escuela de magia Hogwarts?", respuesta: "Harry Potter" },
  { id: 47, pregunta: "¿Qué director dirigió 'Titanic' y 'Avatar'?", respuesta: "James Cameron" },
  { id: 48, pregunta: "¿Qué metal indestructible compone el escudo del Capitán América?", respuesta: "Vibranium" },
  { id: 49, pregunta: "¿Qué serie de animación se ambienta en la ciudad ficticia de Springfield?", respuesta: "Los Simpson" },
  { id: 50, pregunta: "¿Qué actor encarnó a Iron Man en el Universo Cinematográfico de Marvel?", respuesta: "Robert Downey Jr" },
  { id: 51, pregunta: "¿Qué famoso compositor alemán quedó sordo en la última etapa de su vida?", respuesta: "Beethoven" },
  { id: 52, pregunta: "¿Qué banda británica compuso la canción 'Hey Jude' y 'Yesterday'?", respuesta: "The Beatles" },
  { id: 53, pregunta: "¿Quién pintó la célebre obra 'La Gioconda' o 'Mona Lisa'?", respuesta: "Leonardo da Vinci" },
  { id: 54, pregunta: "¿A qué artista estadounidense se le conocía como el 'Rey del Pop'?", respuesta: "Michael Jackson" },
  { id: 55, pregunta: "¿Qué instrumento musical tiene 88 teclas entre blancas y negras?", respuesta: "Piano" },
  { id: 56, pregunta: "¿En qué país nació el género musical del Flamenco?", respuesta: "Espana" },
  { id: 57, pregunta: "¿Quién pintó el cuadro surrealista 'La persistencia de la memoria' (los relojes blandos)?", respuesta: "Salvador Dali" },
  { id: 58, pregunta: "¿Qué cantante británica interpreta el éxito mundial 'Hello' y 'Rolling in the Deep'?", respuesta: "Adele" },
  { id: 59, pregunta: "¿Cuántas cuerdas suele tener una guitarra acústica estándar?", respuesta: "6" },
  { id: 60, pregunta: "¿Qué famoso grupo de rock compuso 'Bohemian Rhapsody'?", respuesta: "Queen" },
  { id: 61, pregunta: "¿Cuántos minutos tiene una hora?", respuesta: "60" },
  { id: 62, pregunta: "¿Cuál es el idioma más hablado del mundo por número de hablantes nativos?", respuesta: "Chino Mandarin" },
  { id: 63, pregunta: "¿Qué ingrediente principal hace que el pan aumente de tamaño al fermentar?", respuesta: "Levadura" },
  { id: 64, pregunta: "¿Cuál es el metal precioso representado por el símbolo químico 'Au'?", respuesta: "Oro" },
  { id: 65, pregunta: "¿Cuántas caras tiene un dado tradicional de seis caras?", respuesta: "6" },
  { id: 66, pregunta: "¿En qué red social se utilizaba originalmente el límite de 140 caracteres?", respuesta: "Twitter" },
  { id: 67, pregunta: "¿Qué pieza del ajedrez puede moverse en cualquier dirección y número de casillas?", respuesta: "Reina" },
  { id: 68, pregunta: "¿Qué moneda se utiliza en la gran mayoría de países de la Unión Europea?", respuesta: "Euro" },
  { id: 69, pregunta: "¿Cuál es el color primario que, al mezclarse con el azul, produce el verde?", respuesta: "Amarillo" },
  { id: 70, pregunta: "¿Qué juego de construcción de bloques fue creado en Suecia por Markus 'Notch' Persson?", respuesta: "Minecraft" }
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
  return texto;
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
    alert(`❌ Respuesta incorrecta o incompleta. La Ficha ${turnoActual} retrocede una casa.\n\nRespuesta esperada: ${preguntaAleatoria.respuesta}`);
    turnoActual = turnoActual === "A" ? "B" : "A";
    return;
  }

  alert(`¡Correcto! Tirando el dado...`);
  const dado = Math.floor(Math.random() * 6) + 1;
  let nuevaCasilla = posiciones[turnoActual] + dado;

  if (nuevaCasilla >= tablero.length - 1) {
    nuevaCasilla = 36;
  }

  posiciones[turnoActual] = nuevaCasilla;
  moverFichaVisual(turnoActual);
  console.log(`Ficha ${turnoActual} saca ${dado} y avanza a casilla ${nuevaCasilla}`);

  const fichaEnTurno = turnoActual;

  if (nuevaCasilla === 36) {
    setTimeout(() => {
      alert(`🎉 ¡¡¡LA FICHA ${fichaEnTurno} HA LLEGADO A LA CASILLA 36 Y HA GANADO EL JUEGO!!! 🎉`);
    }, 400);
    return;
  }

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

const btnReiniciar = document.querySelector("#btnReiniciar");

btnReiniciar.addEventListener("click", function () {
  posiciones.A = 0;
  posiciones.B = 0;

  moverFichaVisual("A");
  moverFichaVisual("B");

  turnoActual = "A";

  console.log("Juego reiniciado. Fichas en casilla 0 y turno de la Ficha A.");
  alert("El juego se ha reiniciado. ¡Turno de la Ficha A!");
});