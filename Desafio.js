const jugadorUno = {
  nombre: "Marce",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Flor",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;
var ganador;

//ataque
if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

// velocidad
if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (
  jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad
) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

// vida
if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.vida < jugadorDos.habilidades.vida) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

// magia
if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.magia < jugadorDos.habilidades.magia) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//articulos
if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.articulos.length < jugadorDos.articulos.length) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//Ganador

if (contadorPuntosJug1 > contadorPuntosJug2) {
  winnerName = jugadorUno.nombre;
} else if (contadorPuntosJug2 > contadorPuntosJug1) {
  winnerName = jugadorDos.nombre;
} else {
  winnerName = "Empate";
}
var resultado = {
  [jugadorUno.nombre]: contadorPuntosJug1,
  [jugadorDos.nombre]: contadorPuntosJug2,
  ganador: winnerName,
};
console.log(resultado);
