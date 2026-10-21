export function promedio(numeros) {
  if (numeros.length === 0) return 0;
  let suma = 0;
  for (const numero of numeros) {
    suma += numero;
  }
  return suma / numeros.length;
}
