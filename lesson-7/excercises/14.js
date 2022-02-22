/**
 * Write a function that takes two arrays and returns
 * a single array that contains the elements of both
 * arrays alternated
 *
 * example: combineArr(['a', 'b'], [1, 2])
 * returns ['a', 1, 'b', 2]
 */

function combineArr(array1, array2) {
  let result = [];
  for (let counter = 0; counter !== array1.length; counter++) {
    result.push(array1.at(counter)) + result.push(array2.at(counter));
  }
  return result;
}

console.log(combineArr(["a", "b"], [1, 2]));
