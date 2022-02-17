/**
 * Wordle I
 *
 * Simulate wordle as played in a terminal
 */

const words = ["store", "plant", "green"];

function wordle(word, day) {
  if (words >= length[6]) {
    return false;
  } else {
    return true;
  }
}

if (wordle("longword") !== false) {
  throw new Error(
    "It should return false when the word is longer than 5 letters"
  );
}

if (wordle("shot") !== false) {
  throw new Error(
    "It should return false when the word is shorter than 5 letters"
  );
}

if (wordle("store", 1) !== true) {
  throw new Error("It should return true when the word of the day is correct");
}

if (wordle("sture") !== "st_re") {
  throw new Error(
    "It should show the correct letters and use underscores for the wrong letters"
  );
}

console.log("CONGRATS! ALL TESTS HAVE PASSED");
