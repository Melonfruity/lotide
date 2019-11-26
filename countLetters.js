const countLetters = (str) => {
  let letters = {}
  for( let i in str){
    let ch = str.charAt(i);
    if(ch !== ' '){
      if(!letters[ch]) letters[ch] = 0;
      letters[ch] ++;
    }
  }
  console.log(letters)
  return letters;
}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const message = actual === expected ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

const countedLetters = countLetters("lighthouse in the house")
const checkCount = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

for (let letter in checkCount) {
  assertEqual(countedLetters[letter], checkCount[letter]);
}