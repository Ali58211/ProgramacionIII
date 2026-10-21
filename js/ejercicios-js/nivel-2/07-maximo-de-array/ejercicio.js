// ============================================================
// 07 - MAXIMO DE ARRAY
// ============================================================
// Devolvé el número más grande del array (el array nunca está vacío).
//
// Ejemplo:  maximo([3, 9, 2]) -> 9
// ============================================================

export function maximo(numeros) {
  // TODO: escribí tu código acá
  // let mayor = numeros[0];
  // for (const n of numeros) {
  //   if (n > mayor) mayor = n;
  // }
  // return mayor;
  return Math.max(...numeros);
}
console.log(maximo([3, 9, 2]));
