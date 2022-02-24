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

 function myReduce(array, func, initialVal) {
    let result = initialVal;
    for (let counter = 0; counter !== array.length; counter++) {
      const item = array.at(counter);
      result = func(result, item);
    }
    return result;
  }
  
  console.log(
    myReduce(
      [4, 5, 4],
      function (result, item) {
        return result * item;
      },
      1
    )
  );
  
