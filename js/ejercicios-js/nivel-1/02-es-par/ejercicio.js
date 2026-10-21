// ============================================================
// 02 - ES PAR
// ============================================================
// Devolvé true si n es par y false si es impar.
// El 0 cuenta como par.
//
// Ejemplo:  esPar(4) -> true      esPar(7) -> false
// ============================================================

// Para ejecutar =  node --test .\nivel-1\02-es-par\ejercicio.test.js

export function esPar(n) {
  // TODO: escribí tu código acá
  return n % 2 === 0;
  // if(n % 2 == 0){
  //   return true;
  // }
  // return false;
}

console.log(esPar(4));
