import { test } from "node:test";
import assert from "node:assert/strict";
import { mayorDeTres } from "./ejercicio.js";

test("mayorDeTres(1, 5, 3) es 5", () => assert.equal(mayorDeTres(1, 5, 3), 5));
test("mayorDeTres(9, 2, 4) es 9", () => assert.equal(mayorDeTres(9, 2, 4), 9));
test("mayorDeTres(1, 1, 1) es 1", () => assert.equal(mayorDeTres(1, 1, 1), 1));
test("mayorDeTres(-1, -5, -3) es -1", () => assert.equal(mayorDeTres(-1, -5, -3), -1));
