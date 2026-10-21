// ============================================================
// 11 - ES PALINDROMO
// ============================================================
// Devolvé true si el texto se lee igual al derecho y al revés,
// ignorando espacios y mayúsculas/minúsculas.
//
// Ejemplo:  esPalindromo("anita lava la tina") -> true
// ============================================================

export function esPalindromo(texto) {
  // TODO: escribí tu código acá
  for (let i = 0; i < str.length - 1; i++) {
    const last = str.length - 1 - i;
    if (last == i) return true;
    if (str[i] !== str[last]) return false;
  }
  return true;
}

console.log(esPalindromo("oso"));
console.log(esPalindromo("ana"));
console.log(esPalindromo("pepe"));
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("hola"));
