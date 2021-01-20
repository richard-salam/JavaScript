'use strict';

var x = 1;
let y = 2;
const z = 3;
var arr = [2];

console.log(arr === window.arr);
console.log(x === window.x);
console.log(z === window.z);
console.log(y === window.y);
