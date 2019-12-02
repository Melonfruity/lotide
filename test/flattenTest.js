const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('./eqArrays')

const assertArraysEqual = function(actual, expected) {
  console.log(actual, expected, eqArrays(actual, expected))
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])