// ============================================================
// 01 - SUMAR HASTA N
// ============================================================
// Devolvé la suma de todos los enteros desde 1 hasta n (inclusive).
// Si n es 0 o negativo, devolvé 0.
//
// Ejemplo:  sumarHasta(4)  ->  10   (1 + 2 + 3 + 4)
// ============================================================

export function sumarHasta(n) {
  // TODO: escribí tu código acá
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sumarHasta(4));
