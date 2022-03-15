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
    if (obj.upper === true) {
        console.log(str.toUpperCase())
    }
    for (let counter = 0; counter !== obj.repeat; counter++) {
        console.log(str)
    }
    for (let count = 0; count !== obj.letterSpacing; count++) {
        console.log(str.join(' '))
    }

}

print('abc', {upper: true, repeat: 4})