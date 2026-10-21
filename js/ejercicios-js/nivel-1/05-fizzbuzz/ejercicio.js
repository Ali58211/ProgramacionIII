// ============================================================
// 05 - FIZZBUZZ
// ============================================================
// Devolvé un array con los números del 1 al "hasta", pero:
//   - múltiplos de 3 -> "Fizz"
//   - múltiplos de 5 -> "Buzz"
//   - múltiplos de 3 y 5 -> "FizzBuzz"
//
// Ejemplo:  fizzbuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]
// ============================================================

export function fizzbuzz(hasta) {
  // TODO: escribí tu código acá
  const resultado = [];
  for (let i = 1; i <= hasta; i++) {
    // if (i % 3 === 0 && i % 5 === 0) resultado.push("FizzBuzz");
    if (i % 15 === 0) resultado.push("FizzBuzz");
    else if (i % 3 === 0) resultado.push("Fizz");
    else if (i % 5 === 0) resultado.push("Buzz");
    else resultado.push(i);
  }
  return resultado;
}
console.log(fizzbuzz(5));
