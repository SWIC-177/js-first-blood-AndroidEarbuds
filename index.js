function greet(name) {
  return `Hello, ${name}`;
}

const greeting = greet("Logan");

// eslint-disable-next-line no-console
console.log(greeting);

const person = {
  name: "John",
  age: 18,
};

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

const adultMessage = verifyAdulthood(person.name, person.age);

console.log(adultMessage);
