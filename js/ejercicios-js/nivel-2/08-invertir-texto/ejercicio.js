// ============================================================
// 08 - INVERTIR TEXTO
// ============================================================
// Devolvé el texto al revés.
//
// Ejemplo:  invertirTexto("hola") -> "aloh"
// ============================================================

export function invertirTexto(texto) {
  // TODO: escribí tu código acá
  // let str = "";
  // for (let i = texto.length - 1; i >= 0; i--) {
  //   str += texto[i];
  // }
  // return str;
  // return texto.split("").reverse().join("");
  return [...texto].reverse().join("");
}
console.log(invertirTexto("hola"));
