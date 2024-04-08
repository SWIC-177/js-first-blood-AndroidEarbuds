function createIncrementFunction(scoreToAdd) {
  return function (score) {
    return score + scoreToAdd;
  };
}

const incrementByOne = createIncrementFunction(1);
const incrementByTwo = createIncrementFunction(2);
const incrementByThree = createIncrementFunction(3);

let score = 0;

score = incrementByOne(score);
console.log("Score:", score);

score = incrementByTwo(score);
console.log("Score:", score);

score = incrementByThree(score);
console.log("Score:", score);
