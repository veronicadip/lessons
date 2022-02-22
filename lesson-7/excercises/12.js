/**
 * Define a function that receives a number as an argument and returns
 * the sum of all numbers up until the provided number.
 *
 * Example: sumTo(5) returns 15 because 1 + 2 + 3 + 4 + 5 = 15
 */

function sumTo(number) {
  let result = 0;
  for (let counter = 0; counter !== number + 1; counter++) {
    result = result + counter;
  }
  return result;
}

console.log(sumTo(5))