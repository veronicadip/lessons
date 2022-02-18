/**
 * Write a function multiplyArray that receives an
 * array of numbers and a number `n` and returns an array
 * with all the numbers multiplied by `n`
 *
 * @param {number[]} numbers
 * @param {number} n
 * @returns {number}
 */

function multiplyArray(numbers, n) {
  // your code here
}

if (!isEqual(multiplyArray([1, 2, 3], 10), [10, 20, 30])) {
  trow new Error("expected multiplyArray([1, 2, 3], 10) to result in [10, 20, 30]")
}

if (!isEqual(multiplyArray([], 10), [])) {
  trow new Error("expected multiplyArray([], 10) to result in []")
}

if (!isEqual(multiplyArray([0, 0], 10), [0, 0])) {
  trow new Error("expected multiplyArray([0, 0], 10) to result in [0, 0]")
}

/**
 * Helper function for tests, please ignore
 */

function isEqual(a, b) {
  return a.every((a, idx) => a === b[idx]);
}
