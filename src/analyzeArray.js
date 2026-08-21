export function analyzeArray(arr) {
  let average;
  let min;
  let max;
  let length;

  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  average = arr.reduce((total, current) => total + current, 0) / arr.length;
  min = Math.min(...arr); // arr.reduce((min, current) => min < current ? min : current, arr[0]);
  max = Math.max(...arr); // arr.reduce((max,current) => max > current ? max : current, arr[0]);
  length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}
