import { test } from "node:test";
import assert from "node:assert/strict";
import { maximo } from "./ejercicio.js";

test("maximo de [3, 9, 2] es 9", () => assert.equal(maximo([3, 9, 2]), 9));
test("maximo de [-1, -5] es -1", () => assert.equal(maximo([-1, -5]), -1));
test("maximo de [7] es 7", () => assert.equal(maximo([7]), 7));
test("maximo de [1, 100, 50, 99] es 100", () => assert.equal(maximo([1, 100, 50, 99]), 100));
