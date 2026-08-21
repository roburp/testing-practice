// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
export const calculator = {
  add(a, b) {
    validateNumbers(a, b);
    return a + b;
  },
  subtract(a, b) {
    validateNumbers(a, b);
    return a - b;
  },
  multiply(a, b) {
    validateNumbers(a, b);
    return a * b;
  },
  divide(a, b) {
    validateNumbers(a, b);
    return a / b;
  },
};

function validateNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Input must be numbers");
  }
}
