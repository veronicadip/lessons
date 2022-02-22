/**
 * Define a function that receives two arrays and returns
 * a single array with the sum of each matching index.
 * 
 * For example:
 * 
 * sumArrays([1, 2], [2, 3])
 * 
 * should return [3, 5]
 */

function sumArrays(array1, array2) {
    let result = []
    for (let counter = 0; counter !== array1.length; counter++) {
        result.push(array1.at(counter) + array2.at(counter))
    }
    return result
}

console.log(sumArrays([1, 2], [2, 3]))