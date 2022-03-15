// Destructuring, Spread Operator, Rest Operator

const arr = [2, 4, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// Destructuring

const [x, y, z] = arr;
console.log(x, y, z);

// Array anidado
const nestedArray = [2, 4, [6, 8, 10]];

const [d, e, f] = nestedArray[2];
console.log(d, e, f);

const pedido = ["judias verdes", "entrecot"];
let [primerPlato, segundoPlato, bebida = "Agua"] = pedido;

// En la deconstrucción podemos asignar un valor por defecto si el elemento original no tiene el valor pretendido

console.log(
  `Primero: ${primerPlato}, Segundo: ${segundoPlato}, bebida: ${bebida}`
);

[segundoPlato, primerPlato, bebida = "Agua"] = pedido;
console.log(
  `Primero: ${primerPlato}, Segundo: ${segundoPlato}, bebida: ${bebida}`
);

// Destructuring Objects
const person = {
  firstName: "Antonio",
  city: "Bombinhas",
  age: 55,
  surname: "Gutierrez",
};

// Desconstrucción de un objeto en variabels
const { firstName, city, age, surname } = person;
console.log(
  `FirstName: ${firstName}, Surname: ${surname}, City: ${city}, Age: ${age}`
);

const {
  firstName: nombre1,
  age: edad,
  city: ciudad,
  mayorEdad = "Si",
} = person;
console.log(
  `Nombre ${nombre1} Edad: ${edad} Ciudad: ${ciudad} mayorEdad=${mayorEdad}`
);
console.log(
  `Segunda línea: Nombre ${person.firstName} Edad: ${person.age} Ciudad: ${person.city}`
);
