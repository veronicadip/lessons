/**
 * Write a function `sign` that returns:
 *
 * - the string "+" when the value is positive
 * - the string "-" when the value is negative
 * - the string "zero" when the value is zero
 *
 */

function sign(value) {
  if (value >= 1) {
    return "+"
  }
  else if (value === 0) {
    return "zero"
  }
  else if (value <= -1) {
    return "-"
  }
}

if (sign(10) !== "+") {
  throw new Error("should return + for positive numbers");
}

if (sign(-10) !== "-") {
  throw new Error("should return - for negative numbers");
}

if (sign(0) !== "zero") {
  throw new Error("should return zero for 0");
}

console.log("CONGRATS!")