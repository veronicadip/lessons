/**
 * Write a function that takes two numbers n1 and n2 and returns an array
 * in which all elements are n1 and has length n2
 *
 * Example: fill(10, 3)
 * returns [10, 10, 10]
 */

function fill(n1, n2) {
  result = [];
  for (let counter = 0; counter !== n2; counter++) {
    result.push(n1);
  }
  return result;
}

console.log(fill(10, 3));
