import { calculator } from "../src/calculator";

test("add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("multiply", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("divide", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("add negative numbers", () => {
  expect(calculator.add(-1, -2)).toBe(-3);
});

test("subtract negative numbers", () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
});

test("multiply negative numbers", () => {
  expect(calculator.multiply(-4, -2)).toBe(8);
});

test("divide negative numbers", () => {
  expect(calculator.divide(4, -2)).toBe(-2);
});

test("add zero", () => {
  expect(calculator.add(1, 0)).toBe(1);
});

test("subtract zero", () => {
  expect(calculator.subtract(1, 0)).toBe(1);
});

test("multiply by 0", () => {
  expect(calculator.multiply(1, 0)).toBe(0);
});

test("divide by 0", () => {
  expect(calculator.divide(1, 0)).toBe(Infinity);
});

test("not a number", () => {
  expect(() => calculator.add(1, "a")).toThrow("Input must be numbers");
});
