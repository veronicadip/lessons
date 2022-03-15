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


function print1(str, obj) {
    result = ''
    finalResult = []
    for (let counter = 0; counter !== obj.repeat; counter++) {
        result = str
        if (obj.upper === true) {
            result = result.toUpperCase()
            for (let count = 0; count !== obj.letterSpacing; count++) {
                for (let counting = 0; counting !== str.length; counting++) {
                    finalResult = finalResult.push(result.at(counting) + ' ')
                    console.log(result)
                }
            }
        }
    }
}

function print3(str, obj) {
    result = ''
    finalResult = ''
    if (obj.upper === true) {
        result = str.toUpperCase()
        for (let counter1 = 0; counter1 <= obj.letterSpacing; counter1++) {
            for (let counter2 = 0; counter2 !== result.length; counter2++) {
                finalResult = finalResult + result.at(counter2) + ' '
            } console.log(finalResult)
        }
    }
}

function print2(str, obj) {
    result = ''
    for (let counter = 0; counter !== obj.repeat; counter++) {
        result = str
        for (let count = 0; count <= obj.letterSpacing; count++) {
            for (let c = 0; c !== result.length; c++) {
                result = result.at(c) + ' '
                console.log(result)
            }
        }
    }
}

print3('abc', {upper: true, repeat: 2, letterSpacing: 1})
