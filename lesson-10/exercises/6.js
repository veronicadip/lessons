// Define a function that receives an object and prints every value in the object

function objVal(obj) {
    return Object.values(obj)
}

function print(obj, func) {
    let result = ''
    const arr = objVal(obj)
    for (let counter = 0; counter !== arr.length; counter++) {
        result = arr.at(counter)
        console.log(result)
    } 
}


print({name: "puki", age: 0})