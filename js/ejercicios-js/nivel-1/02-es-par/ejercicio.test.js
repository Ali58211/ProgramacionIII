import { test } from "node:test";
import assert from "node:assert/strict";
import { esPar } from "./ejercicio.js";

test("4 es par", () => assert.equal(esPar(4), true));
test("7 no es par", () => assert.equal(esPar(7), false));
test("0 es par", () => assert.equal(esPar(0), true));
test("-2 es par", () => assert.equal(esPar(-2), true));
