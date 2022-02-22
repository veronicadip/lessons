/**
 * Write a function that flattens an array a single level
 * deep.
 * 
 * Example: flatten([[1, 2], [3, 4]]);
// => [1, 2, 3, 4]
 */

function flatten(containerArr) {
  let result = [];
  for (let counter1 = 0; counter1 !== containerArr.length; counter1++) {
    let array = containerArr.at(counter1);
    for (let counter2 = 0; counter2 !== array.length; counter2++) {
      result.push(array.at(counter2));
    }
  }
  return result;
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
