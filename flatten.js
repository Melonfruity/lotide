const flatten = (arr) => {
  return arr.reduce((newArray, item) => {
    if (item.length > 0) newArray = newArray.concat(item)
    // Arrays.isArray(item);
    else newArray.push(item)
    return newArray;
  },[])
}

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  console.log(actual, expected, eqArrays(actual, expected))
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])