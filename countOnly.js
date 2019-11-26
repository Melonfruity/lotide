const countOnly = (arr, persons) => {

  const nameCount = arr.reduce((total, name) => {
    if(!total[name] && persons[name]) total[name] = 0;
    if(persons[name]) total[name] ++;
    return total;
  }, {});

  return nameCount;
}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const message = actual === expected ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

// TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);