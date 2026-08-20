// A reverseString function that takes a string and returns it reversed.
export function reverseString(string) {
  // split("") splits the string into individual characters and puts them into an array
  // reverse() reverses the items in the array
  // join("") joins the items back into a string
  return string.split("").reverse().join("");
}
