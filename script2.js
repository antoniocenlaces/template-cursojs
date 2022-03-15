"use strict";

// SPREAD OPERATOR
// Iniciando un array u objeto con ... devuelve cada uno de sus elementos individuales en lista con comas
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tava e nti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ingredients: ${ing1}, ${ing2}, ${ing3}`);
  },
};

// const impares = [1, 3, 5, 7, 9];
// const pares = [2, 4, 6, 8, 10];
// console.log(impares, typeof impares);
// console.log(...impares);

// const imparesYPares = [...impares, ...pares];
// console.log(imparesYPares);

const nombre = "Juan";
const apellido = "Perez";

const letrasNombre = [...nombre]; // devuelve la lista de valores del array

console.log(letrasNombre, ...nombre);

const ingredientes = ["bacon", "mushroom", "onion"];
// restaurant.orderPasta("bacon", "mushroom", "onion");

restaurant.orderPasta(...ingredientes);

const restaurant1 = { ...restaurant }; // devuelve la lista de parejas propiedad:valor que hay en restaurant.

// !OJO¡ si un objeto tiene un array como valor de una propiedad, la asignación de arriba no se lleva los valores del array,
// hace que el array de esa propiedad en restaurant1 apunte a la misma dirección de memoria que el de restaurant.

console.log(restaurant.name, restaurant1.name);
restaurant1.name = "Papa John's";

console.log(restaurant.name, restaurant1.name);
restaurant1.mainMenu.push("Lasagna");

console.log(restaurant.mainMenu, restaurant1.mainMenu);

const menus = restaurant.mainMenu;
const { mainMenu: menu = [] } = restaurant; // al poner menu = [] le indicamos que si mainMenu está vacío cree el array vacío
console.log(`Menus como extracción directa de restaurant.mainMenu`);
console.log(menus);
console.log(`Menu como deconstrucción del objeto`);
console.log(menu);

const impares = [1, 3, 5, 7, 9];
const pares = [2, 4, 6, 8, 10];

const imparesYPares = [...impares, ...pares].sort(ordenar);

function ordenar(a, b) {
  return a - b;
}
console.log(imparesYPares);

const chicos = [
  {
    nombre: "Luis",
    edad: 18,
  },
  {
    nombre: "Pedro",
    edad: 12,
  },
];

const chicas = [
  {
    nombre: "Paula",
    edad: 4,
  },
  {
    nombre: "Ariadna",
    edad: 17,
  },
];

const alumnos = [...chicos, ...chicas];
console.log(alumnos);

alumnos.sort(ordena);
function ordena(a, b) {
  return a.edad - b.edad;
}
console.log(alumnos);

// Otra forma de ordenar

const ordenar2 = (a, b) => a.edad - b.edad;
alumnos.sort(ordenar2);

const restaurant2 = restaurant;
const { restaurant: restaurant3 } = { ...restaurant }; // shadow copy, mantiene referencias de memoria al contenido de restaurant

const postres = ["Flan", "Tiramisú", "Café afogato al torroncino"];
restaurant2.postres = postres;

// opción 2 con srpead operator:

const { restaurant: restaurant4 } = { ...restaurant, postres: postres };

// opción 3 con shorthand atajo
const { restaurant: restaurant5 } = { ...restaurant, postres };

// REPASANDO
// DESTRCUTURING: Cogemos un valor de un objeto/array y lo guardamos en una variable.
// SPREAD OPERATOR: quitamos {} o [] de un objeto / array

// REST OPERATOR: hace lo contrario del spread

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = arr2;
console.log(`Usando REST OPERATOR`);
console.log(first, second, rest);

// EJERCICIO guardar en variable el horario del restaurante entre semana

// const {openingHours} =restaurant;
const { sat, sun, ...weekdayTimetable } = restaurant.openingHours;
console.log(sat, sun, weekdayTimetable);

const suma1 = (a, b) => a + b;
const suma2 = (a, b, c) => a + b + c;

console.log(`Suma de 3 y 4: ${suma1(3, 4)}`);
console.log(`Suma de 3 , 4 y 5: ${suma2(3, 4, 5)}`);

const suma = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(suma([1, 2, 3]));
// en este caso los argumentos que se pasan a la función es una lista, por tanto los ... hacen un REST y convierten en array
const suma_dc = (...arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(suma_dc(1, 6, 7, 3, 4, 5, 6));

const numerosHasta100 = [...Array(100).keys()];
console.log(numerosHasta100);

console.log(suma_dc(...numerosHasta100));

// type coercion -> evalua a falso '',0,null,undefined

// const numGuest = restaurant.numGuest ? restaurant.numGuest : 10;
// const {numGuest=10}=restaurant;
// const numGuest=restaurant.numGuest || 10;

// ?? nulish colaescing operator: solo si es diferente de null or undefined
const numGuest = restaurant.numGuest ?? 10;
console.log(`El número de comensales máximo: ${numGuest}`);

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
// 1. Crear un array con los jugadores de cada equipo (*player1* y *player2*)
// 2. El  portero del Bayern de Munich es *Neuer*, el resto de la lista son jugadores. Crea una variable para el portero (*goalKeeper*)  y
//  otra para los jugadores del Bayern  (*fieldPlayers*)
// 3. Crea un array con todos los jugadores de ambos equipos (*allPlayers*)
// 4. Durante  el  partido,  el Bayern Munich utiliza 3  reservas. Crea un nuevo array **players1Final** que contenga el
//  equipo de inicio y los reservas *Thiago*, *Coutinho* y *Perisic*.
// 5. En base  al objeto game.odds, crea una  variable para cada apuesta  y llámalas *team1*, *draw* y *team2*.
// 6. Escribe una función *printGoals* que recibe un número arbitrario de nombres de jugadores (no un array) e imprime sus nombres por consola así como el total de goles marcados (uno por cada jugador). Usa luego la función mandando como parámetro *game.scored*
// 7. El equipo con la apuesta menor es el que tiene más probabilidades de ganar. Imprime ese dato por consola SIN USAR un operador if/else  o un operador ternario.
// TEST DATA para punto 6: Usar jugadores 'Davies', 'Muller', 'Lewandowski' y 'Kimmich'. Después, llamar ala función  otra vez con los jugadores de game.scored.

// Apartado 1
// Primero destructuración de game.players
const { players } = game;
console.log(players);

const [player1, player2, ...rest1] = players;
console.log(player1, player2, rest1);

// todo a la vez:
// const {players: [player1, player2]} =game;
// pq game es un objeto iniciamos con {} al pasarlo a array enumeramos las variables de destino en []

// Apartado 2
// Usando REST OPERATOR
const [goalKeeper, ...fieldPlayers] = player1;
console.log(goalKeeper, fieldPlayers);

// Apartado 3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// Apartado 4
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
