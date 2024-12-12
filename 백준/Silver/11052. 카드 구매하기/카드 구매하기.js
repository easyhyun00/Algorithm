const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const cardList = [0, ...arr];
const dp = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = 0; j < i; j++) {
    dp[i] = Math.max(dp[i], dp[j] + cardList[i - j]);
  }
}

console.log(dp[N]);