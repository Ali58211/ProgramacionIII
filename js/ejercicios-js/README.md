# Ejercicios de JavaScript — Lógica y algoritmia

Práctica de **lógica de programación** en JavaScript. Cada ejercicio es una función que tenés que completar. Un **test automático** te dice al instante si está bien o mal.

No hay DOM, ni HTML, ni CSS: solo JavaScript puro para entender cómo funciona el lenguaje.

## Requisitos

- **Node.js 18 o superior** (probamos con Node 24). Verificalo con:

  ```bash
  node --version
  ```

## Cómo funciona

Cada ejercicio vive en su propia carpeta y tiene dos archivos:

```
nivel-1/01-sumar-hasta/
├── ejercicio.js        Acá escribís tu código (tiene la consigna y TODOs).
└── ejercicio.test.js   El test. NO lo modifiques.
```

La consigna está al principio de `ejercicio.js`, como comentario, con un ejemplo de uso.

## Cómo ejecutar los tests

Desde la raíz del repo:

```bash
npm test
```

Eso corre **todos** los tests.

Para correr los de un solo ejercicio, pasá el archivo de test (con comodín):

```bash
node --test "nivel-1/01-sumar-hasta/*.test.js"
```

Y para un nivel entero:

```bash
node --test "nivel-3/**/*.test.js"
```

Vas a ver, por cada ejercicio, si pasa o falla. Cuando la función esté bien, el test pasa.

## Niveles

### Nivel 1 — Fundamentos

| # | Carpeta | Función | Practicás |
|---|---------|---------|-----------|
| 1 | `nivel-1/01-sumar-hasta/` | `sumarHasta(n)` | bucles, acumuladores |
| 2 | `nivel-1/02-es-par/` | `esPar(n)` | operador módulo, booleanos |
| 3 | `nivel-1/03-mayor-de-tres/` | `mayorDeTres(a, b, c)` | condicionales |
| 4 | `nivel-1/04-tabla-de-multiplicar/` | `tablaMultiplicar(n)` | bucles, arrays |
| 5 | `nivel-1/05-fizzbuzz/` | `fizzbuzz(hasta)` | condicionales, bucles, arrays |

### Nivel 2 — Arrays, strings y objetos

| # | Carpeta | Función | Practicás |
|---|---------|---------|-----------|
| 6 | `nivel-2/06-sumar-array/` | `sumarArray(numeros)` | recorrer arrays |
| 7 | `nivel-2/07-maximo-de-array/` | `maximo(numeros)` | recorrer y comparar |
| 8 | `nivel-2/08-invertir-texto/` | `invertirTexto(texto)` | strings, arrays |
| 9 | `nivel-2/09-promedio/` | `promedio(numeros)` | acumuladores, división |
| 10 | `nivel-2/10-contar-vocales/` | `contarVocales(texto)` | strings, condicionales |

### Nivel 3 — Algoritmos

| # | Carpeta | Función | Practicás |
|---|---------|---------|-----------|
| 11 | `nivel-3/11-es-palindromo/` | `esPalindromo(texto)` | strings, comparaciones |
| 12 | `nivel-3/12-factorial/` | `factorial(n)` | recursión o bucle |
| 13 | `nivel-3/13-fibonacci/` | `fibonacci(n)` | secuencias, arrays |
| 14 | `nivel-3/14-es-primo/` | `esPrimo(n)` | bucles, divisibilidad |
| 15 | `nivel-3/15-ordenar-sin-sort/` | `ordenar(numeros)` | algoritmos de ordenamiento |

## Reglas

- Usá `let` y `const`. **Nunca** `var`.
- No uses librerías externas.
- Las funciones **reciben** datos por parámetro y los **devuelven** con `return` (no imprimas con `console.log` para aprobar).
- No modifiques los archivos `*.test.js`.
- Leé la consigna completa antes de escribir una línea.

## Soluciones

En [`soluciones/`](./soluciones/) hay una versión resuelta de cada ejercicio, con la misma ruta. Tratá de usarla después de intentar, no antes.

`soluciones/nivel-1/01-sumar-hasta/ejercicio.js`

## ¿Te trabaste?

- Volvé a leer la consigna y el ejemplo.
- Agregá un `console.log` temporal adentro de tu función para ver qué está pasando.
- Corré `node --test` y leé el mensaje del test que falla: te dice qué esperaba.

¡Éxitos! 🚀
