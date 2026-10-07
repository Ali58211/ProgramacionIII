//es6 -- escma script 6
// Operadores

//Template Strings
// let nombre = "Joe Doe";

// const bienvenida = `
//     Hola que tal ${nombre},
//     todo bien?
// `;

// console.log(bienvenida);

// Operador ternario

// const edad = 19;

// const res = edad >= 18 ? "Es mayor" : "Es menor"; // "edad" va cualquier exprecion booleana
// console.log(res);

//Sentencia
// if (edad >= 18) console.log("Es mayor");
// else console.log("No es mayor");

// Estructuring

// const nombre = "Juan";
// const edad = 25;
// const direccion = "Calle falsa 123";

// const persona = { nombre, edad, direccion };

// console.log(persona);

// Destructuring
// const persona = { nombre: "Juan", edad: 23, direccion: "Calle falsa 123" };
// const { direccion, nombre: nomb} = persona; // nombre: nomb -> renombrar la variable nombre a nomb
// console.log(direccion);

// const persona = {
//   nombre: { first: "Joe", last: "Doe" },
//   edad: 23,
//   direccion: "Calle falsa 123",
// };
// const {
//   direccion,
//   nombre: { first },
// } = persona;
// console.log(first);

// const nums = [3, 6, 2, 7];
// const [, , este] = nums;

// console.log(este);

// function sumar({ isSuma = true, a, b }) {
//   // declarar el tipo aca es declararlo como defecto
//   if (isSuma) {
//     return Number(a) + Number(b);
//   }
//   return a + b;
// }
// // sumara ({a:2 , b:3})

// // const params = {
// //   isSuma: true,
// //   a: 2,
// //   b: 3,
// // };

// const tePasoEsto = { a: 2, b: 3 };

// sumar(tePasoEsto);

// rest operator (solo funciona en destructuring)
// rest != spread

const nums = [3, 6, 2, 7];

// // const [tres, ...rest] = nums;
// const [, , , ...rest] = nums;

// console.log(rest);

// const product = {
//   id: 1,
//   precio: 3999,
//   nombre: "Pepitos",
//   categorias: ["Snacks", "Galletitas", "Consumible"],
//   hasStock: true,
// };

// const { id, ...rest } = product;

// // console.log(rest);
// // console.log(product); //el objeto original no de modifica

// delete product.id; //modifica el objeto original
// console.log(product);

// Spread Operator -- operador de propagacion

const piñata = [
  "Caramelo",
  "Chupetin",
  "Alfajor",
  "Confetti",
  "Plastico",
  "Harina",
];

// console.log(piñata);

// console.log("La piñata se rompio : ", ...piñata);

// const numeros = [1, 2];

// const nums2 = [6, 3];

// const total = [...numeros, ...nums2];
// // nums2.push(3);

// // console.log(nums2);
// // console.log(numeros);
// console.log(total);

// //quiero un array que no tenga nros repetidos...
// const numeros = [4, 7, 8, 2, 5, 3, 8, 6, 1, 8, 2, 3];

// const set = [...new Set(numeros)];

// console.log(set);

//quiero modificar el precio sin modificar el objeto
// const product = {
//   id: 1,
//   precio: 3999,
//   nombre: "Pepitos",
//   categorias: ["Snacks", "Galletitas", "Consumible"],
//   hasStock: true,
// };

// // const productUpdated = {precio: 500, ...product};//queda el objeto princiapl
// // const productUpdated = { ...product, precio: 5000 }; //modifica el precio sin modificar el objeto original
// const updateValue = (key, value) => ({ ...product, [key]: value }); //modifica el precio sin modificar el objeto original
// const productUpdated = updateValue("precio", 5000);
// const productUpdated2 = updateValue("hasStock", false);
// const productUpdated3 = updateValue("isRepetido", false);

// console.log([productUpdated, productUpdated2, productUpdated3]);

// console.log(productUpdated);

// ---------------------
// nullish coalescing

// const mayor = true;

// // const msg = mayor || "Es menor"; //operador OR

// // el OR, pero para null y undefined
// const msg = mayor ?? "Es menor"; // es un OR mas semantico,, ?? se usa para asignar valores por defectos

// console.log("Mayor?: ", msg);

// let obj = null ?? {}; // es nulo o un obj vacio

// optional chaining -- por si se nos elvida el nullish coalescing

// let obj = null;

// //...

// // obj ??= {}; // es lo mismo ⤵️(nullish coalescing)
// // obj = obj ?? {};

// console.log(obj?.age); //? pregunta si esta vacio (optional chaining)

// obj = {
//   name: "Juan",
//   age: 22,
// };

// Extra: Set, Map, y Clases (NO ENTRAN EN EL PARCIAL)

// set

// const set = new Set();
// set.add(2);
// set.add(6);
// set.add(3);
// set.add(2);
// set.add(3);

// console.log(set);
// console.log(set.size); //.size muestra la cantidad de elementos
//los elementos repetidos no se muestran ni se guardan.

// map

// const map = new Map();

// map.set("Hola", 2); // la key siempre es string
// map.set("Hola", 5); // reemplaza la anterior con la misma key
// map.set("Hola", [2, 3, 4]); // Dentro del value se puede poner cualquier cosa

// console.log(map);

// Hola que tal
// h: 1, o: 1, l: 2, a: 1 " ": 2,
// function countChars(str) {
//   const map = new Map();
//   for (const char of str) {
//     if (!map.has(char)) {
//       map.set(char, 1);
//     } else {
//       const value = map.get(char);
//       map.set(char, value + 1);
//     }
//   }
//   return map;
// }

// const result = countChars("Hola que tal? todo bien?");
// console.log(result);

// buscar: Big O notation
//La notación Big O es un lenguaje matemático que se usa en ciencias de la computación para medir cómo escala la eficiencia de un algoritmo a medida que crece el tamaño de los datos de entrada (n).

// Clases

// class Persona {
//   // Una clase solo puede tener un solo constructor
//   #name;
//   #lastname;
//   constructor(name, lastname) {
//     this.#name = name;
//     this.#lastname = lastname;
//   }
//   get name() {
//     return this.#name;
//   }

//   set name(nombre) {
//     this.#name = nombre;
//   }
// }

// const juan = new Persona("Juan", "Perez");
// juan.lastname = "Jose";

// console.log(juan.lastname);
// console.log(juan);
