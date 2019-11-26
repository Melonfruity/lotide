const takeUntil = (arr, func) => {
  let index = 0;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])) break;
    index ++;
  }
  return arr.slice(0, index);
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertEqual(eqArrays(results1,[1, 2, 5, 7, 2]), true)
assertEqual(eqArrays(results1,[ 'I\'ve', 'been', 'to', 'Hollywood' ]), true)