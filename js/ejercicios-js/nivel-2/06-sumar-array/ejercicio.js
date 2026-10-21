// ============================================================
// 06 - SUMAR ARRAY
// ============================================================
// Devolvé la suma de todos los números del array.
// Si el array está vacío, devolvé 0.
//
// Ejemplo:  sumarArray([1, 2, 3]) -> 6
// ============================================================
//el forof recorre la lista por casa uno de los elementos
export function sumarArray(numeros) {
  // TODO: escribí tu código acá
  let acum = 0;
  // for (const n of numeros) {
  //   acum += n;
  // }
  // for (let i = 0; i < numeros.length; i++) {
  //   acum += numeros[i];
  // }
  // return acum;
  return numeros.reduce((act, acc) => act + acc, 0);
}
console.log(sumarArray([1, 2, 3]));
