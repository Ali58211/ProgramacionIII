export function contarVocales(texto) {
  const vocales = "aeiou";
  let contador = 0;
  for (const letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) contador++;
  }
  return contador;
}
