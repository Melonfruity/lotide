const flatten = (arr) => {
  return arr.reduce((newArray, item) => {
    if (item.length > 0) newArray = newArray.concat(item)
    // Arrays.isArray(item);
    else newArray.push(item)
    return newArray;
  },[])
}

module.exports = flatten;
