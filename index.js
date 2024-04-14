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

// Pass By Copy
const name = "John Doe";
let otherName = name;

console.log(Name is: ${name});
console.log(Other name is: ${name});

otherName = "Jane Doe";

console.log(Name is: ${name});
console.log(Other name is: ${otherName});

otherName = 23;
console.log(Name is: ${name});
console.log(Other name is: ${otherName});

// Pass By Value
const younger1 = 13;
let younger2 = younger1;

function incrementAge(age) {
  return age + 1;
}

younger2 = incrementAge(younger2);

console.log(Younger1 is: ${younger1});
console.log(Younger2 is: ${younger2});


//Pass By Reference
const person = { 
  name: "John Doe", 
  age: 23,
   address: { 
    street: "123 Main St", 
    city: "New York", 
    state: "NY", 
    zip: "1001", 
  }, 
};

const otherPerson = person;

otherPerson.name = "Jane Doe";

console.log(Person's name is: ${person.name}); 
console.log(Other Person's name is: ${otherPerson.name});

//Mutations
const person = {
  name: "John Doe",
  age: 23,
  address: {
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
  },
  };
  
  const otherPerson = { ...person };
  
  otherPerson.name = "Jane Doe";
  
  console.log(Person's name is: ${person.name});
  console.log(Other Person's name is: ${otherPerson.name});


  // 2nd part of 12-1
  const people = [
    {
      id: 1,
      name: "John Doe",
      age: 23,
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 29,
    },
    {
      id: 3,
      name: "Jim Doe",
      age: 34,
    },
    {
      id: 4,
      name: "Jill Doe",
      age: 45,
    },
    {
      id: 5,
      name: "Jack Doe",
      age: 56,
    },
    {
      id: 6,
      name: "Jenny Doe",
      age: 67,
    },
  ];
  
  function renameOdds(peopleList) {
    for (let i = 0; i < peopleList.length; i+= 1) {
      if (peopleList[i].id % 2 !== 0) {
        peopleList[i].name = "Odd Name";
      }
    }
  
    return p;
  }
  
  console.log(renameOdds(people));