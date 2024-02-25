function greet(name) {
  // eslint-disable-next-line prefer-template
  return "Hello, " + name;
}

const greeting = greet("Logan");

// eslint-disable-next-line no-console
console.log(greeting);
