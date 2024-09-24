const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const average = input.reduce((sum, num) => sum + Number(num), 0) / 5;

const sorted = input.sort((a, b) => a - b);
const median = sorted[2];

console.log(average);
console.log(median);
