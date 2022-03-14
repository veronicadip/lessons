// Convert the following functions to arrow functions

function f1() {
  console.log("f1");
}

function f2(a, b, c) {
  return a + b + c;
}

setInterval(function () {
  console.log("interval passed");
}, 1000);

[1, 2, 3, 4].map(function (item, index) {
  const temp = item + index;
  return temp * item;
});

function f3(n) {
  return function () {
    return n + 1;
  };
}

const f4 = function (a, b) {
  return Math.pow(a, b);
};

// bonus, try to understand what this does and what's the result
[1, 2, 3].reduce(f4);
