const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const {
  players: [players1, players2],
} = game;
const [, ...jugadoresBayern] = players1;
const [, ...jugadoresDortmund] = players2;

// jugadores es un array con 0 al 9 del Bayern y 10 al 19 son del Dortmund
const jugadores = [...jugadoresBayern, ...jugadoresDortmund];

// variables generales
const goles = [];
const numGoles = Math.floor(Math.random() * 10);
const numeroAzar1a90 = () => Math.floor(Math.random() * 90) + 1;

console.log(`Número de goles aleatorio: ${numGoles}`);
// Crea array aleatorio de objetos gol

for (let i = 0; i < numGoles; i++) {
  // para el número de goles que quiero generar
  const numeroJugador0a19 = Math.floor(Math.random() * 19);
  goles[i] = {
    jugador: jugadores[numeroJugador0a19],
    minuto: numeroAzar1a90(),
    equipo: numeroJugador0a19 < 10 ? "Bayern" : "Borussia",
  };
  //  goles.push(gol);
}
// Ordenar goles por el minuto marcado
const table = document.getElementById("tableGoles");
const listadoGoles = (goles) => {
  goles.sort((a, b) => a.minuto - b.minuto);
  let i = 1;
  for (const { jugador, minuto, equipo } of goles) {
    console.log(
      `Gol ${i}: ${jugador} del equipo ${equipo} marcó en el minuto: ${minuto}`
    );
    i++;
    const rowContent = `<tr>
          <td>${jugador}</td>
          <td>${equipo}</td>
          <td>${minuto}</td>
        </tr>`;
    table.innerHTML += rowContent;
  }
};
listadoGoles(goles);
// Sacar listado de los goles que es un array con n objetos

// el resultado que vamos buscando es algo como:

const jugadoresGol = {
  Pavard: 2,
  Alaba: 1,
};
// Mete gol Lewandowsky. tres formas equivalentes
jugadoresGol.Lewandowsky = 1;
jugadoresGol.Lewandowsky = 1;

const jugadorGol = "Lewandowsky";
jugadoresGol[jugadoresGol] = 1;
// esto no funciona
// jugadoresGol.jugadorGol=1;
const gol = {
  jugador: "nombre jugador",
  minuto: 17,
  equipo: "Bayern",
  desc: "Pierna derecha desde el centro del área",
};
// const goles = [{gol1}, {gol2}, {gol3}]

// función que crea el resumen del partido
const table2 = document.getElementById("tableGoles2");
const listadoGolesPorJugador = (goles) => {
  // golesPorJugador = {"nombre jugador": {goles: numGoles,equipo:"nombre equipo"}}
  const golesPorJugador = {};
  for (const { jugador, equipo } of goles) {
    if (golesPorJugador[jugador]) golesPorJugador[jugador].goles++;
    else golesPorJugador[jugador] = { goles: 1, equipo };
    //  golesPorJugador[jugador] = golesPorJugador[jugador] + 1 || 1;
  }
  // ordenando golesPorJugador por equipo
  const 
  console.log(`imprimo los items de cada entrada de golesPorJugador`);
  for (const item of Object.entries(golesPorJugador)) {
    console.log(item);
    const rowContent = `<tr>
          <td>${item[0]}</td>
          <td>${item[1].goles}</td>
          <td>${item[1].equipo}</td>
        </tr>`;
    table2.innerHTML += rowContent;
  }
  console.log(`imprimo el objeto golesPorJugador`);
  console.log(golesPorJugador);
};
listadoGolesPorJugador(goles);
