import { test } from "node:test";
import assert from "node:assert/strict";
import { esPalindromo } from "./ejercicio.js";

test("'anita lava la tina' es palíndromo", () => assert.equal(esPalindromo("anita lava la tina"), true));
test("'hola' no es palíndromo", () => assert.equal(esPalindromo("hola"), false));
test("'Reconocer' es palíndromo (ignora mayúscula)", () => assert.equal(esPalindromo("Reconocer"), true));
test("texto vacío es palíndromo", () => assert.equal(esPalindromo(""), true));
