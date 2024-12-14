const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const dp = new Array(input + 1);
/**
 * 0으로 시작 X
 * 1연속 X
 */
dp[0] = [0, 0];
dp[1] = [0, 1];

for (let i = 2; i <= input; i++) {
  dp[i] = [];
  dp[i][0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log(BigInt(dp[input][0] + dp[input][1]).toString());
