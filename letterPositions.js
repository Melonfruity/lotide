const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
  let index = 0;
  for (let i of sentence){
    if(i !== ' '){
      if(!results[i]) results[i] = new Array();
      results[i].push(index);
    }
    index ++;
  };
  return results;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const testPositions = letterPositions('lighthouse in the house');

const letterPosition = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}

for (let letter in letterPosition) {
  console.log(testPositions[letter], letterPosition[letter], eqArrays(testPositions[letter], letterPosition[letter]));
}