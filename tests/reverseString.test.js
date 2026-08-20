import { reverseString } from "../src/reverseString.js";

test("empty string", () => {
  expect(reverseString("")).toBe("");
});

test("one character", () => {
  expect(reverseString("a")).toBe("a");
});

test("leading space", () => {
  expect(reverseString(" a")).toBe("a ");
});

test("one word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("multiple words", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("numbers", () => {
  expect(reverseString("123")).toBe("321");
});
