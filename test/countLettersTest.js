const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters')
// TEST IMPLEMENTATION
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