import { test } from "node:test";
import assert from "node:assert/strict";
import { esPrimo } from "./ejercicio.js";

test("2 es primo", () => assert.equal(esPrimo(2), true));
test("7 es primo", () => assert.equal(esPrimo(7), true));
test("13 es primo", () => assert.equal(esPrimo(13), true));
test("1 no es primo", () => assert.equal(esPrimo(1), false));
test("9 no es primo", () => assert.equal(esPrimo(9), false));
test("15 no es primo", () => assert.equal(esPrimo(15), false));
