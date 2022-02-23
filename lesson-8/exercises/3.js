/**
 * Write a function that recevies an array of functions and
 * calls each function in the array
 */

const func1 = function () {
  console.log("I'm func1 and somebody called me!");
};
const func2 = function () {
  console.log("I'm func2 and somebody called me too");
};
const func3 = function () {
  console.log("barf barf!");
};
const func4 = function () {
  console.log("who called puki's function?");
};

const funcArr = [func1, func2, func3, func4];

const arrMap = funcArr.map(function (item) {
  return console.log(item());
});
