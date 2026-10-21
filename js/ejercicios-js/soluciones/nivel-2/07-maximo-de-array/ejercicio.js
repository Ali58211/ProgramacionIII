export function maximo(numeros) {
  let mayor = numeros[0];
  for (const numero of numeros) {
    if (numero > mayor) mayor = numero;
  }
  return mayor;
}
