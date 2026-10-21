export function ordenar(numeros) {
  const copia = [...numeros];
  for (let i = 0; i < copia.length - 1; i++) {
    for (let j = 0; j < copia.length - 1 - i; j++) {
      if (copia[j] > copia[j + 1]) {
        const aux = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = aux;
      }
    }
  }
  return copia;
}
