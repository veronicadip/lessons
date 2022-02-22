/**
 * Write two functions:
 * 
 * - A function that receives an array and a number and divides each
 * item of the array by the provided number
 * - A function that receives an array of arrays and a number and 
 * divides each item in each array by the provided number. This function
 * must call the function defined previously.
 * 
 * Example: divideNested([[10, 20], [30, 40]], 10)
 * should return [[1, 2], [3, 4]]
 */

function divideArr(array, n) {
    let result = []
    for (let counter = 0; counter !== array.length; counter++) {
        result.push(array.at(counter) / n)
    }
    return result
}

function divideArrs(containerArr, n) {
    let result = []
    for (let counter = 0; counter !== containerArr.length; counter++) {
        result.push(divideArr(containerArr.at(counter), n))
    }
    return result
}

console.log(divideArrs([[10, 20], [30, 40]], 10))