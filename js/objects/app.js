// const objPersona = {
//   nombre: "Pepe",
//   edad: 23,
// };

// const inmutable = Object.freeze(objPersona); // los cambios no se ven reflejados (elemento inmutable)

// inmutable.nombre = 45;

// console.log(inmutable);

//JSON -> JavaScript Object Notation
//console.log(objPersona.nombre); // getter

// objPersona.nombre = 56; // setter

// objPersona.direccion = "calle falsa 123";

//console.log(objPersona);

// const obj2 = objPersona;

// obj2.apellido = "Gomez";

// console.log(obj2);
// console.log(objPersona);

// Mutabilidad e inmutabilidad
// mutabilidad, un objeto se puede cambiar, internamente se cambia el objeto principal
//inmutable, ningun objeto se cambia

const key = "algo";

const salon = {
  nombre: "TSP2",
  ubicacion: "2do piso",
  isOcupado: true, // los booleanos cominezan con: is / has
  asientos: 40,
  [key]: "interesante...",
};

// let key = "isOcupado";

//console.log(salon.nombre); //objeto.mensaje

//console.log(salon[key]);

// for (const key in salon) {
//   const element = salon[key];
//   console.log(key, ": ", element);
// }

// salon["pepe"] = "no se";

console.log(Object.entries(salon));

// const arr = ["nombre", "apellido", "edad", "otra", "mas"];
// const empty = {};

// for (const element of arr) {
//   empty[element] = "algo";
// }

// console.log(empty);
