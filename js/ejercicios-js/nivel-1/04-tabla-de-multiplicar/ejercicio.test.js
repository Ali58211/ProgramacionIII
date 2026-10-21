import { test } from "node:test";
import assert from "node:assert/strict";
import { tablaMultiplicar } from "./ejercicio.js";

test("tabla del 3", () =>
  assert.deepEqual(tablaMultiplicar(3), [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]));
test("la tabla tiene 10 elementos", () => assert.equal(tablaMultiplicar(6).length, 10));
test("tabla del 1 empieza en 1 y termina en 10", () => {
  const t = tablaMultiplicar(1);
  assert.equal(t[0], 1);
  assert.equal(t[9], 10);
});
