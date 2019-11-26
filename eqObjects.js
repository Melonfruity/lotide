const eqObjects = (objOne, objTwo) => {

  const objOneKeys = Object.keys(objOne);
  const objTwoKeys = Object.keys(objTwo);

  if(objOneKeys.length !== objTwoKeys.length) 
    return false;
  
  for (let index in objOneKeys){
    let key = objOneKeys[index];

  console.log(typeof objOne[key]) 
    if (Array.isArray(objOne[key]) && Array.isArray(objOne[key])) {
      if (!eqArrays(objOne[key], objTwo[key]))
        return false;
    } else if (typeof objOne[key] === 'object' && typeof objOne[key] === 'object'){
      if(!eqObjects(objOne[key], objTwo[key]))
        return false;  
    } else if (objOne[key] !== objTwo[key]) return false;
  }
  return true;
}

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
};

/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
 */
console.log(eqObjects( {a: 1, b: '1', c: [1 , 2], e: { a: 2, b: 2}}, {a: 1, b: '1', c: [1 , 2], e: { a: 1, b: 2}}));