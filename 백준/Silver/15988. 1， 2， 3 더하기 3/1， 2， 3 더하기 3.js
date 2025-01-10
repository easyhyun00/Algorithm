const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const T = input[0];

/**
 * 1 => 1
 * 2 => 1 + 1, 2
 * 3 => 1 + 1 + 1, 2 + 1, 1 + 2, 3
 * 4 => 1 + 1 + 1 + 1, 2 + 1 + 1, 1 + 2 + 1, 3 + 1, 1 + 1 + 2, 2 + 2, 1 + 3
 *   => dp[3] + dp[2] + dp[1]
 */

const dp = new Array(Math.max(...input.slice(1)) + 1).fill(BigInt(0));
dp[1] = BigInt(1);
dp[2] = BigInt(2);
dp[3] = BigInt(4);
dp[4] = BigInt(7);

for (let i = 5; i < dp.length; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % BigInt(1000000009);
}

let result = [];

for (let i = 1; i <= T; i++) {
  const N = input[i];
  result.push(dp[N]);
}

console.log(result.join('\n').toString());
