import { test } from "node:test";
import assert from "node:assert/strict";
import { factorial } from "./ejercicio.js";

test("factorial(0) es 1", () => assert.equal(factorial(0), 1));
test("factorial(1) es 1", () => assert.equal(factorial(1), 1));
test("factorial(5) es 120", () => assert.equal(factorial(5), 120));
test("factorial(6) es 720", () => assert.equal(factorial(6), 720));
