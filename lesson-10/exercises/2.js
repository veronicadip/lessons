// Convert the following arrow functions to other functions

function f1() {
  return "same old";
}

function f2() {
  {
    ("same old");
  }
}

// also, do you understand what this function does?

function f3(a) {
  return function f3b(b) {
    return a + b
  }
}
  /** the new function called 'f3' receives a value (a). Then declares
   * another function that receives the value of (b), and that second
   * function sums the values of 'a' and 'b'.
   */


function powFunc(item, index){
  return Math.pow(item, index)
}
[(1, 2 , 3)].map(powFunc)


// setTimeout is different to setInterval, try to find out what it does

function consoleFunc() {
  console.log("timed out")
}
setTimeout(consoleFunc, 1000)

  /** once the timer you give to the setTimeout function expires, the function
  * you give to it (in this case it's a console.log that throws the next
  * string: "timed out") it's executed.
  */

function f4b(a){
  return fn(a);
}
function f4(fn) {
  return f4b(a);
}


// what this does? is there a simple way to accomplish the same?
[1, 2, 3].reduce(() => 10);

  /** the .reduce takes the two first numbers on the array and returns
   * the number 10. Then takes that result and the third number and
   * returns the number 10.
  */

  const array = [1, 2, 3]

  function f5(array){
    return 10
  }

  // a simpler way to do it can be like this:

  const makeTen = () => 10
  makeTen([1, 2, 3])
