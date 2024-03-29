function greet(name) {
  return `Hello, ${name}`;
}

const greeting = greet("Logan");

// eslint-disable-next-line no-console
console.log(greeting);

const people = [
  {
    name: "John",
    age: 17,
  },
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Mary",
    age: 25,
  },
  {
    name: "Peter",
    age: 30,
  },
  {
    name: "Paul",
    age: 35,
  },
];

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

people.forEach((person) => {
  const adultMessage = verifyAdulthood(person.name, person.age);
  console.log(adultMessage);
});
