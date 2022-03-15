// Convert the following functions to arrow functions

const f1 = () => console.log("f1");


const f2 = (a, b, c) => a + b + c;


setInterval(() => console.log("interval passed"), 1000);

[1, 2, 3, 4].map((item, index) => {
  const temp = item + index;
  return temp * item;
});

const f3 = (n) => () => n + 1

const f4 = (a, b) => Math.pow(a, b)


// bonus, try to understand what this does and what's the result
[1, 2, 3].reduce(f4)

/** 1- .reduce takes the two first numbers on the array and calls the
 * f4 function.
 * 2- The first number (a) is used as the base number and the second
 * one (b) is the exponent used to raise the base.
 * 3- On this case the result is 1 (1² = 1).
 * 4- Now .reduce will take the result as the new value for (a), and the
 * next number on the array (in this case 3) as the value for (b).
 * 5- The final result is 1 because 1³ = 1
*/
