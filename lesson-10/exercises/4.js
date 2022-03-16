// implement a function `print` that receives:
//
//  1. an string as the first argument
//  2. an object with options as the second argument
//
//  `print` prints the string using the options from the object. The possible options are:
//
//  - `upper`: a boolean indicating if the string should be printed uppercase
//  - `repeat`: a number indicating how many times should the string be printed
//  - `letterSpacing`: a number indicating how many spaces to print between the letters
//
// Example:
// `print('abc', {letterSpacing: 2, upper: true})` prints in the console the string 'A  B  C'

function print(str, obj) {
  result = "";
  finalResult = "";
  space = " ";
  if (obj.upper === true) {
    result = str.toUpperCase();
    for (let counter1 = 0; counter1 !== result.length; counter1++) {
      finalResult = `${finalResult}${result.at(counter1)}${space.repeat(
        obj.letterSpacing
      )}`;
    }
  }
  if (obj.repeat >= 0) {
    finalResult = `${finalResult.repeat(obj.repeat)}`;
  }
  console.log(finalResult);
}

print("abc", { upper: true, letterSpacing: 3, repeat: 2 });
