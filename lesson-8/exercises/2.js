/**
 * Write your own version of Array.reduce that receives
 *
 * - An array
 * - A function
 * - The initial value of the result
 *
 * Example: myReduce([1, 2, 3], function (total, item) {return total + item}, 0)
 * returns 6
 *
 * Use this function to multiply all the items in an array
 */

const array = [2, 4, 2];
const reduceArr = array.reduce(function (total, item) {
  return total * item;
}, 1);

console.log(reduceArr);
