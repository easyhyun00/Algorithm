const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input[0];

const dp = new Array(N + 1).fill(0);
dp[1] = input[1];
dp[2] = input[1] + input[2];

/**
 * dp[5] => 5번째 잔 마시지 않는 경우
 *       => 5번째 잔 마시면서, 4번째 잔 안 마시는 경우
 *       => 5번째 잔 마시면서, 4번째 잔 마시는 경우
 *
 *       Math.max(dp[4], dp[3] + input[5], dp[2] + input[4] + input[5])
 */

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + input[i],
    dp[i - 3] + input[i - 1] + input[i]
  );
}

console.log(dp[N]);
