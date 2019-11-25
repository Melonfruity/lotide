// FUNCTION IMPLEMENTATION
const head = (arr) => arr[0];

// TEST CODE
const assertEqual = function(actual, expected) {
  const message = actual === expected ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");