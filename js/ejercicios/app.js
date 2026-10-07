// Ejercicios js
// 1- Hacer una funcion que me indique si una cadena es palindromo o no.

// Ejemplo...
// input: "Oso"
// output: true

// input: "Pepe"
// output: false

// function esPalindromo(str) {
//   for (let i = 0; i < str.length - 1; i++) {
//     const last = str.length - 1 - i;
//     if (last == i) return true;
//     if (str[i] !== str[last]) return false;
//   }
//   return true;
// }

// js
// const esPalindromo = (str) => [...str].toReversed().join("") == str;

// console.log(esPalindromo("oso"));
// console.log(esPalindromo("ana"));
// console.log(esPalindromo("pepe"));
// console.log(esPalindromo("reconocer"));
// console.log(esPalindromo("hola"));

// 2- Crear una funcion que cuente cuantas vocales tiene una cadena de texto.

// Ejemplo...
// input: "Oso"
// output: 2

// input: "Hola que tal"
// output: 5

function contarVocales(cadena) {
  return cadena
    .toLowerCase()
    .split("")
    .filter((letra) => "aeiou".includes(letra)).length;
}

const palabra = "Hola que tal";
console.log(palabra, contarVocales(palabra));
