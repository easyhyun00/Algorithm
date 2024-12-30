const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const max = Math.max(...arr);
const min = Math.min.apply(undefined, arr);

console.log(max * min);