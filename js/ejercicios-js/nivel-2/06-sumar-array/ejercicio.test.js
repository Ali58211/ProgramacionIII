import { test } from "node:test";
import assert from "node:assert/strict";
import { sumarArray } from "./ejercicio.js";

test("[1, 2, 3] suma 6", () => assert.equal(sumarArray([1, 2, 3]), 6));
test("array vacío suma 0", () => assert.equal(sumarArray([]), 0));
test("[-1, 1] suma 0", () => assert.equal(sumarArray([-1, 1]), 0));
test("[10, -5, 2] suma 7", () => assert.equal(sumarArray([10, -5, 2]), 7));
