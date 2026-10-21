// ============================================================
// 04 - TABLA DE MULTIPLICAR
// ============================================================
// Devolvé un array con la tabla de multiplicar de n, del 1 al 10.
//
// Ejemplo:  tablaMultiplicar(3) -> [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// ============================================================

// Para ejecutar = node --test .\nivel-1\04-tabla-de-multiplicar\ejercicio.test.js

export function tablaMultiplicar(n) {
  // TODO: escribí tu código acá
  const tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(i * n);
  }
  return tabla;
}

console.log(tablaMultiplicar(200));
