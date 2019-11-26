const map = (arr, func) => {
  let newArray = []
  for(let i in arr){
    newArray.push(func(arr[i]));
  }
  return newArray;
}

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const message = actual === expected ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => 'gone');
assertEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true)
assertEqual(eqArrays(results1, ['g', 'c', 't', 'm', 'f']), false)
assertEqual(eqArrays(results2, ['gone', 'gone', 'gone', 'gone', 'gone']), true)