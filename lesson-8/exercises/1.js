/**
 * Write your own version of Array.map that receives an
 * array and a function and applies the function to each item
 *
 *  example: myMap([1, 2, 3], function (item) { return item + 1 })
 *  returns [2, 3, 4]
 */

const array = [5, 10, 15];
const multiplyArr = array.map(function (item) {
  return item * 5;
});

console.log(multiplyArr);
