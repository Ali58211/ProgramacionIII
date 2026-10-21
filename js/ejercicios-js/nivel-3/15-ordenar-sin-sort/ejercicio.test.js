import { test } from "node:test";
import assert from "node:assert/strict";
import { ordenar } from "./ejercicio.js";

test("ordena [3, 1, 2]", () => assert.deepEqual(ordenar([3, 1, 2]), [1, 2, 3]));
test("ordena [5, -1, 0, 3]", () => assert.deepEqual(ordenar([5, -1, 0, 3]), [-1, 0, 3, 5]));
test("array de un elemento", () => assert.deepEqual(ordenar([5]), [5]));
test("array vacío", () => assert.deepEqual(ordenar([]), []));
test("no muta el array original", () => {
  const original = [3, 1, 2];
  ordenar(original);
  assert.deepEqual(original, [3, 1, 2]);
});
