import { analyzeArray } from "../src/analyzeArray.js";

test("empty array", () => {
  expect(() => analyzeArray([])).toThrow("Array cannot be empty");
});

test("not an array - number input", () => {
  expect(() => analyzeArray(123)).toThrow("Input must be an array");
});

test("not an array - string input", () => {
  expect(() => analyzeArray("")).toThrow("Input must be an array");
});

test("positive numbers", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
});

test("negative numbers", () => {
  expect(analyzeArray([-1, -2, -3, -4, -5, -6])).toEqual({
    average: -3.5,
    min: -6,
    max: -1,
    length: 6,
  });
});

test("positive and negative numbers", () => {
  expect(analyzeArray([1, -2, 3, -4, 5, -6])).toEqual({
    average: -0.5,
    min: -6,
    max: 5,
    length: 6,
  });
});

test("one number", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});
