function multiple3Nums1(a, b, c) {
  return a * b * c;
}

const multiple3Nums2 = function multiple3Nums1(a, b, c) {
  return a * b * c;
};

const multiply3Nums2 = (a, b, c) => a * b * c;

const multiply3Nums2 = (num1, num2, num3) => {
  return num1 * num2 * num3;
};

const subtract2Nums = (num1, num2) => num1 - num2;

subtract2Nums(10, 5);

function greet(name) {
  return `Hello, ${name}!`;
}

function processPerson(name, func) {
  return func(name);
}

console.log(processPerson("Logan", greet));
