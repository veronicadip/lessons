// Convert the following arrow functions to other functions

const f1 = () => "same old";

const f2 = () => {
  "same old";
};

// also, do you understand what this function does?
const f3 = (a) => (b) =>
  a + b[(1, 2, 3)].map((item, index) => Math.pow(item, index));

// setTimeout is different to setInterval, try to find out what it does
setTimeout(() => {
  console.log("timed out");
}, 1000);

function f4(fn) {
  return (a) => fn(a);
}

// what this does? is there a simple way to accomplish the same?
[1, 2, 3].reduce(() => 10);
