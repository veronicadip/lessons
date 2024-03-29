/**
 * Write a function sumArr that receives an array of numbers
 * and returns the sum of the numbers in the array
 *
 * @param {number[]} numbers to be added
 * @returns {number}
 */
function sumArr(numbers) {
  let result = 0
  for (let counter = 0; counter !== numbers.length; counter++) {
    result = numbers.at(counter) + result
  }
  return result
}

if (sumArr([10, 20, 30]) !== 60) {
  throw new Error("expected the sum of 10 + 20 + 30 to be 60");
}

if (sumArr([0, 0, 0]) !== 0) {
  throw new Error("expected the sum of 0 + 0 + 0 to be 0");
}

if (sumArr([]) !== 0) {
  throw new Error("expected the sum of empty array to be 0");
}

if (sumArr([-10, 10]) !== 0) {
  throw new Error("expected the sum of -10 and 10 to be zero");
}

module.exports = sumArr

console.log("CONGRATS!")
