const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => Number(el));

const N = input[0];

// 계단이 1개 또는 2개일 때를 처리
if (N === 1) {
  console.log(input[1]);
  return;
}

if (N === 2) {
  console.log(input[1] + input[2]);
  return;
}

/**
 * i-2 O, i-1 X, i O => dp[i-2] + input[i]
 * i-3 O, i-2 X, i-1 O, i O => dp[i-3] + input[i-1] + input[i]
 */

const dp = new Array(N + 1).fill(0);
dp[1] = input[1];
dp[2] = input[1] + input[2];

for (let i = 3; i < N + 1; i++) {
  dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
}

console.log(dp[N]);
