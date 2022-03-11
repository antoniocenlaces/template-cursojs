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
  orderDelivery: function (starterIndex, mainIndex, time, address) {
    const starterMenu = this.starterMenu[starterIndex];
    const mainMenu = this.mainMenu[mainIndex];
    console.log(
      `Ordering ${starterMenu} and ${mainMenu} for delivery to ${address} at ${time}`
    );
  },
  orderDeliveryImproved: function ({
    starterIndex,
    mainIndex,
    time,
    direccion: address,
  }) {
    const starterMenu = this.starterMenu[starterIndex];
    const mainMenu = this.mainMenu[mainIndex];
    console.log(
      `Ordering ${starterMenu} and ${mainMenu} for delivery to ${address} at ${time}`
    );
  },
  sendOrder: function ({ nombre, apellido, time, direccion, importe }) {
    console.log(
      `Envío del pedido de ${nombre} ${apellido} a las ${time} en ${direccion}. Importe: ${importe}€`
    );
  },
};

const {
  name: nombre,
  openingHours: horasApertura,
  categories: categorias,
} = restaurant;
console.log(`Nombre: ${nombre}, Categorias: ${categorias}`);
console.log("Horas Apertura:", horasApertura);

// name es una variable con texto:
let name = "Este texto";
// ahora le cambio el valor y le asigno el valor restaurante.name
({ name } = restaurant);
console.log(name);

const {
  fri: { open, close },
} = restaurant.openingHours;

console.log(`Friday is open from ${open} to ${close}`);

console.log(`FUNCIONES EN OBJETOS`);

console.log(restaurant.order(0, 1));
restaurant.orderDelivery(0, 1, "13:35", "Mi casa");

// Método Object.keys devuelve un array con todas las propiedades del objeto
const keysHorasApertura = Object.keys(horasApertura);
console.log(`Keys de horasApertura `, keysHorasApertura);

const keysRestaurant = Object.keys(restaurant);
console.log(`Keys de Restaurant `, keysRestaurant);

const pedido1 = {
  nombre: "Susana",
  apellido: "Integrales",
  direccion: "Av. Gómez Laguna, 50 12B",
  starterIndex: 0,
  mainIndex: 1,
  time: "13:50",
  importe: 40.5,
};
restaurant.orderDeliveryImproved(pedido1);

restaurant.sendOrder(pedido1);
