const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = input.slice(1);
let result = [];

const max = Math.max(...arr);

// [1] 약수의 합
const divisor = new Array(max + 1).fill(0);

for (let i = 1; i <= max; i++) {
  for (let j = i; j <= max; j += i) {
    divisor[j] += i;
  }
}

// [2] 누적 합
const sum = new Array(max + 1).fill(0);

for (let i = 1; i <= max; i++) {
  sum[i] = sum[i - 1] + divisor[i];
}

// [3] 결과
arr.forEach((num) => {
  result.push(sum[num]);
});

console.log(result.join('\n'));
