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

// 1er opcion..
// function contarVocales(str) {
//   let contador = 0;
//   const vocales = ["a", "e", "i", "o", "u"];
//   for (const char of str) {
//     if(vocales.includes(char)) constador ++;
//   }
//   return contador;
// }

// 2da opcion..

// function contarVocales(str) {
//   const vocales = ["a", "e", "i", "o", "u"];
//   return [...str].filter((c) => vocales.includes(c)).length;
// }

// 3er opcion..

function contarVocales(str) {
  return str.replace(/[^aeiou]/g, "").length; ///[^aeiou]/ -- expresion regular
}

console.log(contarVocales("hola mundo"));
console.log(contarVocales("hola que tal?"));
console.log(contarVocales("oso"));

// const palabra = "Hola que tal";
// console.log(palabra, contarVocales(palabra));
