const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(Math.max(...dp));
