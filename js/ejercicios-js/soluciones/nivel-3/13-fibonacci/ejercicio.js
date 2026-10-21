export function fibonacci(n) {
  const secuencia = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) secuencia.push(i);
    else secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
  }
  return secuencia;
}
