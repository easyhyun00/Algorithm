const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = input.slice(1);
let result = [];

// 약수 합
const max = Math.max(...arr);
const divisor = new Array(max + 1).fill(0);

for (let i = 1; i <= max; i++) {
  for (let j = i; j <= max; j += i) {
    divisor[j] += i;
  }
}

// 누적 합
const cumulative = new Array(max + 1).fill(0);

for (let i = 1; i <= max; i++) {
  cumulative[i] = cumulative[i - 1] + divisor[i];
}

arr.forEach((item) => {
  result.push(cumulative[item]);
});

console.log(result.join('\n'));
