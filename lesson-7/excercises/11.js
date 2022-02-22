/**
 * Define a function that receives an object that contains
 * a name and a surname and returns an string in the form "Name Surname"
 * 
 * Example: fullname({ name: 'Puki', surname: 'Dip' }) returns 'Puki Dip'
 */

function fullnameFunc(fullnameObj) {
    return fullnameObj.name + " " + fullnameObj.surname
}

console.log(fullnameFunc({name: "Puki", surname: "Dip"}))