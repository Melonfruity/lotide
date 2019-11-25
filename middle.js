const middle = (arr) => {
  if(arr.length < 3 ) return [];
  const middleIndex = Math.floor(arr.length/2);
  if(arr.length % 2 === 0){
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
  return [arr[middleIndex]];
}

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(middle(actual), expected))
}

assertArraysEqual([1, 2], []) // => [2]
assertArraysEqual([1, 2, 3], [2]) // => [2]
assertArraysEqual([1, 2, 3, 4, 5], [3]) // => [3]
assertArraysEqual([1, 2, 3, 4, 5, 6], [3,4]) // => [3, 4]