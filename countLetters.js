const assertEqual = require('./assertEqual');

const countLetters = (str) => {
  let letters = {}
  for( let i in str){
    let ch = str.charAt(i);
    if(ch !== ' '){
      if(!letters[ch]) letters[ch] = 0;
      letters[ch] ++;
    }
  }
  return letters;
}

module.exports = countLetters;