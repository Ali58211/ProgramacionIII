import { test } from "node:test";
import assert from "node:assert/strict";
import { fizzbuzz } from "./ejercicio.js";

test("fizzbuzz(5)", () => assert.deepEqual(fizzbuzz(5), [1, 2, "Fizz", 4, "Buzz"]));
test("el 15 es FizzBuzz", () => assert.equal(fizzbuzz(15)[14], "FizzBuzz"));
test("el 9 es Fizz", () => assert.equal(fizzbuzz(9)[8], "Fizz"));
test("el 10 es Buzz", () => assert.equal(fizzbuzz(10)[9], "Buzz"));
