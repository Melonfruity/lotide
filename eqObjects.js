const eqArrays = require('./eqArrays')
const eqObjects = (objOne, objTwo) => {

  const objOneKeys = Object.keys(objOne);
  const objTwoKeys = Object.keys(objTwo);

  if(objOneKeys.length !== objTwoKeys.length) 
    return false;
  
  for (let index in objOneKeys){
    let key = objOneKeys[index];
    
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

module.exports = eqObjects;