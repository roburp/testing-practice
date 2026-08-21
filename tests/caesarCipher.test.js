import { caesarCipher } from "../src/caesarCipher.js";

test("shifts lowercase letters", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("shifts uppercase letters", () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
});

test("wraps lowercase letters", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("wraps uppercase letters", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("preserves spaces", () => {
  expect(caesarCipher("a b c", 1)).toBe("b c d");
});

test("preserves punctuation", () => {
  expect(caesarCipher("a!b", 1)).toBe("b!c");
});

test("preserves numbers", () => {
  expect(caesarCipher("a1b2", 1)).toBe("b1c2");
});

test("handles a shift of 0", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});
