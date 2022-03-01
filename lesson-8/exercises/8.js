/**
 * Investigate about Array.every() and use it
 * to write a function that passes the tests
 */

const pukiFunc = (currentString) => currentString === "puki"
console.log(allPukis.every(pukiFunc))


if (allPukis(["puki", "puki", "puki"]) !== true) {
  throw new Error(
    "it should return true when all the items in the array are pukis"
  );
}

if (allPukis(["puki", "tomy", "puki", "puki"]) !== false) {
  throw new Error(
    "it should return false when not all the items in the array are pukis"
  );
}
