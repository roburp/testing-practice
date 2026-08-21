export function caesarCipher(string, shift) {
  let result = "";

  for (const char of string) {
    const code = char.charCodeAt(0); // Gets the character code of the current character

    //check uppercase (65-90) or lowercase (97-122)
    if (code >= 65 && code <= 90) {
      //uppercase
      const newCode = ((code - 65 + shift) % 26) + 65; // -65 to allow modulo 26
      result += String.fromCharCode(newCode); // Convert newCode into a character
    } else if (code >= 97 && code <= 122) {
      //lowercase
      const newCode = ((code - 97 + shift) % 26) + 97; // -97 to allow modulo 26
      result += String.fromCharCode(newCode); // Convert newCode into a character
    } else {
      // Other characters like spaces, punctuation, etc.
      result += char;
    }
  }
  return result;
}
