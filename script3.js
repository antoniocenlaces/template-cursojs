"use strict";

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
};

// selecciona todos los platos del restaurante
// al no poner corchetes en el destino crea un elemento de array
const platosRestaurante = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(platosRestaurante, typeof platosRestaurante);
console.log(`Lista completa de platos del resaturante:`);
let i = 0;
for (const plato of platosRestaurante) {
  i++;
  console.log(`En este restaurante se puede comer: ${i}. ${plato}`);
}
for (let i = 0; i < platosRestaurante.length; i++) {
  const plato = platosRestaurante[i];
  console.log(`${i + 1}- ${plato}`);
}
for (const entrada of platosRestaurante.entries()) {
  // entrada es un array: [keyArray,valueArray]
  console.log(`${entrada}, typeof: ${typeof entrada}`);
}

for (const [key, value] of platosRestaurante.entries()) {
  console.log(`${key + 1}_ ${value}`);
}
