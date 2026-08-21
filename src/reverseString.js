// A reverseString function that takes a string and returns it reversed.
export function reverseString(string) {
  // split("") splits the string into individual characters and puts them into an array
  // reverse() reverses the items in the array
  // join("") joins the items back into a string
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }
  return string.split("").reverse().join("");
}
