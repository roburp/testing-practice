//import { capitalize } from "../src/capitalize.js";
import { capitalize } from "../src/capitalize.js";

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("one character", () => {
  expect(capitalize("a")).toBe("A");
});

test("leading space", () => {
  expect(capitalize(" a")).toBe(" a");
});

test("one word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("multiple words", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("numbers", () => {
  expect(capitalize("123")).toBe("123");
});

test("not a string", () => {
  expect(() => capitalize(123)).toThrow("Input must be a string");
});
