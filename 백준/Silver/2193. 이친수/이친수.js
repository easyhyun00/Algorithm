const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const dp = Array.from({ length: input + 1 }, () => Array(2).fill(BigInt(0)));
/**
 * 0으로 시작 X
 * 1연속 X
 */
dp[1] = [BigInt(0), BigInt(1)];

for (let i = 2; i <= input; i++) {
  dp[i][0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log(BigInt(dp[input][0] + dp[input][1]).toString());
