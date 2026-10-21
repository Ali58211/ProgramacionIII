import { test } from "node:test";
import assert from "node:assert/strict";
import { promedio } from "./ejercicio.js";

test("promedio de [2, 4, 6] es 4", () => assert.equal(promedio([2, 4, 6]), 4));
test("array vacío devuelve 0", () => assert.equal(promedio([]), 0));
test("un solo elemento", () => assert.equal(promedio([10]), 10));
test("promedio de [0, 10] es 5", () => assert.equal(promedio([0, 10]), 5));
