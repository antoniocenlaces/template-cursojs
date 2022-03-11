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

const impares = [1, 3, 5, 7, 9];
const pares = [2, 4, 6, 8, 10];
console.log(impares, typeof impares);
console.log(...impares);

const imparesYPares = [...impares, ...pares];
console.log(imparesYPares);

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
