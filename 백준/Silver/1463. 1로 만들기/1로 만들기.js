const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const dp = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  // 1을 빼는 방법
  dp[i] = dp[i - 1] + 1;

  // 2로 나누는 방법
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 3으로 나누는 방법
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  // 이번 방법에다가 +1한 값 중에 가장 작은 값
}

console.log(dp[input]);
