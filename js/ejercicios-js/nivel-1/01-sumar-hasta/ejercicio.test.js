import { test } from "node:test";
import assert from "node:assert/strict";
import { sumarHasta } from "./ejercicio.js";

test("sumarHasta(4) es 10", () => assert.equal(sumarHasta(4), 10));
test("sumarHasta(1) es 1", () => assert.equal(sumarHasta(1), 1));
test("sumarHasta(0) es 0", () => assert.equal(sumarHasta(0), 0));
test("sumarHasta(-3) es 0", () => assert.equal(sumarHasta(-3), 0));
