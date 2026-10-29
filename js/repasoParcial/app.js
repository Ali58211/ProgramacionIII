// const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(2));

// fetch();
// Para que sirve?
// sirve para traer recursos, mediante peticiones, es decir que sive para hacer peticiones web

//Para que funciona?
// Busca lo que le pasemos

// const res = fetch("sdfsd", {
//   method: "POST",
// });

//Promesas
// Estados:
//1- Pendiente (pending)
//2- Hecha (fullfilled)
//3- Rechazada (rejected)

// new Promise((resolve, reject) => {
//   resolve("promesa cumplida");
//   reject("Promesa rechazada por tiempo");
//   //no es nescesario pones las dos tipos de promesas, solo si no estas seguro de cumplir la promesa
// });

// const modificarAuto = new Promise((res, rej) => {
//   const losPlanche = true;
//   if (losPlanche) {
//     res("Lo hice");
//   } else {
//     rej("No me dio el presupuesto");
//   }
// });

// modificarAuto
//   .then((msg) => console.log("Estoy orgulloso, ", msg))
//   .catch((porque) => console.log(porque))
//   .finally(() => console.log("lo intente"));

// PArentesco sirve para navegar
