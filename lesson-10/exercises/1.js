// Convert the following functions to arrow functions

() => "f1";


(a, b, c) => a + b + c;


setInterval(() => "interval passed", 1000);

[1, 2, 3, 4].map((item, index) => {
  const temp = item + index;
  return temp * item;
});

n => n + 1;

const f4 = (a, b) => Math.pow(a, b)


// bonus, try to understand what this does and what's the result
[1, 2, 3].reduce(f4)

/**  this will reduce the array to a number that results from the first
number in the array taken to the power of the second number and then
to the third. In this case the result will be 1 */
