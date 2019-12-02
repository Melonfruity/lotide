const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects( {a: 1, b: '1', c: [1 , 2], e: { a: 2, b: 2}}, {a: 1, b: '1', c: [1 , 2], e: { a: 1, b: 2}}));
