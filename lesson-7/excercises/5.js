/**
 * The average of a collection of values is calculated by
 * summing all of the values and dividing by the number of values.
 *
 * For example, the average of 10, 40 and 100 is 50 because:
 *
 * avg = (10 + 40 + 100) / 3 = 50
 *
 * Complete the function `avg`, which receives an array of values
 * and returns the average of them
 */

const sumArr = require('./4.js')

/**
 * avg calculates the average of an array of values
 *
 * @param {number[]} values used to calculate the average
 * @returns {number}
 */

function avg(values) {
  if (values.length === 0) {
    return 0;
  }

  return sumArr(values) / values.length;
}


if (avg([-10, 10]) !== 0) {
  throw new Error("Expected the average of [-10, 10] to be zero");
}

if (avg([10, 40, 100]) !== 50) {
  throw new Error("Expected the average of [10, 40, 100] to be 50");
}

console.log(avg([]));
if (avg([]) !== 0) {
  throw new Error("Expected the average of an empty array to be zero");
}

console.log("CONGRATS! all tests pass");
