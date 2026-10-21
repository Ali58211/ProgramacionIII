// ============================================================
// 09 - PROMEDIO
// ============================================================
// Devolvé el promedio de los números del array.
// Si el array está vacío, devolvé 0.
//
// Ejemplo:  promedio([2, 4, 6]) -> 4
// ============================================================

export function promedio(numeros) {
  // TODO: escribí tu código acá
  if (numeros.length === 0) return 0;
  let acum = 0;
  for (const n of numeros) {
    acum += n;
  }
  return acum / numeros.length;
}
console.log(promedio([2, 4, 6]));
