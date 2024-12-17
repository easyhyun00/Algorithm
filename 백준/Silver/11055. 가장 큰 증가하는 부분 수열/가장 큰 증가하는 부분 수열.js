const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const dp = new Array(N).fill(0);
dp[0] = arr[0];

for (let i = 1; i < N; i++) {
  dp[i] = arr[i];
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
}

console.log(Math.max(...dp));
