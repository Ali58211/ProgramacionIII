import { test } from "node:test";
import assert from "node:assert/strict";
import { contarVocales } from "./ejercicio.js";

test("'hola' tiene 2 vocales", () => assert.equal(contarVocales("hola"), 2));
test("'murcielago' tiene 5 vocales", () => assert.equal(contarVocales("murcielago"), 5));
test("texto vacío tiene 0", () => assert.equal(contarVocales(""), 0));
test("cuenta mayúsculas: 'AEIOU' tiene 5", () => assert.equal(contarVocales("AEIOU"), 5));
