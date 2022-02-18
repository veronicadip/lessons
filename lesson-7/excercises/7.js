/**
 * Write a function multiplyArray that receives an
 * array of numbers and a number `n` and returns an array
 * with all the numbers multiplied by `n`
 *
 * @param {number[]} numbers
 * @param {number} n
 * @returns {number[]}
 */

function multiplyArray(numbers, n) {
  let result = []
  for (let counter = 0; counter !== numbers.length; counter++) {
    result.push(numbers.at(counter) * n)
  }
  return result
}

if (!isEqual(multiplyArray([1, 2, 3], 10), [10, 20, 30])) {
  throw new Error("expected multiplyArray([1, 2, 3], 10) to result in [10, 20, 30]")
}

if (!isEqual(multiplyArray([], 10), [])) {
  throw new Error("expected multiplyArray([], 10) to result in []")
}

if (!isEqual(multiplyArray([0, 0], 10), [0, 0])) {
  throw new Error("expected multiplyArray([0, 0], 10) to result in [0, 0]")
}

console.log("CONGRATS!!")

/**
 * Helper function for tests, please ignore
 */

function isEqual(a, b) {
  if(!Array.isArray(a)) {
    throw new Error(`you were supposed to provide an array but instad provided: ${typeof a}`)
  }

  return a.every((a, idx) => a === b[idx]);
}
