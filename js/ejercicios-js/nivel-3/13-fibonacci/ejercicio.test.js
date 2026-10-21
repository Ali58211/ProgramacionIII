import { test } from "node:test";
import assert from "node:assert/strict";
import { fibonacci } from "./ejercicio.js";

test("fibonacci(1) es [0]", () => assert.deepEqual(fibonacci(1), [0]));
test("fibonacci(2) es [0, 1]", () => assert.deepEqual(fibonacci(2), [0, 1]));
test("fibonacci(7) es [0, 1, 1, 2, 3, 5, 8]", () =>
  assert.deepEqual(fibonacci(7), [0, 1, 1, 2, 3, 5, 8]));
test("fibonacci(0) es []", () => assert.deepEqual(fibonacci(0), []));
