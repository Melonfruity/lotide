const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++){
    if(Array.isArray(arr1[i]) && Array.isArray(arr1[i])){
      if(!eqArrays(arr1[i], arr2[i])) 
        return false;
    } else if(arr1[i] !== arr2[i]){
      return false
    };
  }
  return true;
};

/* eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false */

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]))// => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]))// => false