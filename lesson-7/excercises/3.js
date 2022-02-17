/**
 * Wordle I
 *
 * Simulate wordle as played in a terminal
 */

const levels = ["store", "plant", "green"];
const wordLength = 5;
const wrongLetter = "_";

function wordle(guess, currentLevel) {
  let answer = "";
  const currentWord = levels[currentLevel]

  if (currentLevel >= levels.length) {
  return "That level doesn't exist"
  }

  if (guess.length !== wordLength) {
    return false;
  }

  if (guess === currentWord) {
    return true;
  }

  for (let number = 0; number <= 4; number++) {
    if (guess.at(number) !== currentWord.at(number)) {
      answer = answer + wrongLetter;
    } else {
      answer = answer + currentWord.at(number);
    }
  }

  return answer;
}

if (wordle("longword", 0) !== false) {
  throw new Error(
    "It should return false when the word is longer than 5 letters"
  );
}

if (wordle("shot", 0) !== false) {
  throw new Error(
    "It should return false when the word is shorter than 5 letters"
  );
}

if (wordle("store", 0) !== true) {
  throw new Error("It should return true when the word of the day is correct");
}

if (wordle("sture", 0) !== "st_re") {
  throw new Error(
    "It should show the correct letters and use underscores for the wrong letters"
  );
}

if (wordle("plant", 1) !== true) {
  throw new Error("It should return true when the word of the day is correct");
}

if (wordle("", 89) !== "That level doesn't exist") {
  throw new Error("It should return an error when the level doesn't exist")
}

console.log("CONGRATS! ALL TESTS HAVE PASSED");
