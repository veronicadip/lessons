/**
 * Write your own version of Array.map that receives an
 * array and a function and applies the function to each item
 *
 *  example: myMap([1, 2, 3], function (item) { return item + 1 })
 *  returns [2, 3, 4]
 */

function myMap(array, func) {
  const result = [];
  for (let counter = 0; counter !== array.length; counter++) {
    const item = array.at(counter);
    result.push(func(item));
  }
  return result;
}

console.log(
  myMap([1, 2, 3], function (item) {
    return item + 1;
  })
);
console.log(
  myMap([1, 2, 3], function (item) {
    return item * 10;
  })
);
