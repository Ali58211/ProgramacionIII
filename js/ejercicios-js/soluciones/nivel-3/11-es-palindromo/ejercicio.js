export function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/\s/g, "");
  const invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}
