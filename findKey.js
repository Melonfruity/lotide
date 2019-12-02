// FUNCTION IMPLEMENTATION
const findKey = (obj, func) => {
  const keys = Object.keys(obj)
  for(let key in keys){
    if(func(obj[keys[key]]))
      return keys[key]; 
  }
}

module.exports = findKey;