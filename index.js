function greet(name) {
  return `Hello, ${name}`;
}

const greeting = greet("Logan");

// eslint-disable-next-line no-console
console.log(greeting);


const name = 'Logan';
const age = 23;

function verifyAdulthood(:'Logan', : 23); {
  if (age >= 18) {
    return `Welcome, ${name}!`;
  } else {
    return `You are not old enough to enter, ${name}.`;
  }
}


console.log(verifyAdulthood("Logan", 23));