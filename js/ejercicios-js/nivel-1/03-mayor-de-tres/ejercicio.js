// ============================================================
// 03 - MAYOR DE TRES
// ============================================================
// Devolvé el mayor de los tres números a, b y c.
//
// Ejemplo:  mayorDeTres(1, 5, 3) -> 5
// ============================================================

// Para ejecutar = node --test .\nivel-1\03-mayor-de-tres\ejercicio.test.js
export function mayorDeTres(a, b, c) {
  // TODO: escribí tu código acá
  /*let mayor = 0;
  if (a > b && a > c) mayor = a;
  if (b > a && b > c) mayor = b;
  if (c > b && c > a) mayor = c;
  if (a == b && a == c) mayor = a;
  return mayor;*/
  // let mayor = a;
  // if (b > mayor) mayor = b;
  // if (c > mayor) mayor = c;
  // return mayor;
  return Math.max(a, b, c);
}

console.log(mayorDeTres(10, 20, 5));
