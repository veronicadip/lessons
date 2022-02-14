/**
  * Define an array with 5 items and print the following text:
  *
  * This array has 5 elements
  * The first element is {FIRST ELEMENT HERE}
  * The last element is {LAST ELEMENT HERE}
  *
  */
const firstelement = "cat";
const secondelement = "dog";
const thirdelement = "parrot";
const fourthelement = "frog";
const lastelement = "bird";
const array1 = [firstelement, secondelement, thirdelement, fourthelement, lastelement];

console.log("This array has " + (array1.length) + " elements")
console.log("The first element is " + array1[0])
console.log("The last element is " + array1[array1.length -1])