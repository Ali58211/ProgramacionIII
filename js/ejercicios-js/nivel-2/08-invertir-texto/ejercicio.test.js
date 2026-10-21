import { test } from "node:test";
import assert from "node:assert/strict";
import { invertirTexto } from "./ejercicio.js";

test("invertirTexto('hola') es 'aloh'", () => assert.equal(invertirTexto("hola"), "aloh"));
test("texto vacío devuelve vacío", () => assert.equal(invertirTexto(""), ""));
test("un solo caracter", () => assert.equal(invertirTexto("a"), "a"));
test("invertirTexto('1234') es '4321'", () => assert.equal(invertirTexto("1234"), "4321"));
