const Stack = require('./index')

const s = new Stack();

s.push(5);
console.log(s)

s.pushArray([6,9,11])
console.log(s)

s.pop();
console.log(s)