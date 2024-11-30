const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input.shift()[0];
const arrA = input[0];

const dp = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  // 나로 시작
  dp[i] = 1;

  // 이전 결과 반복문
  for (let j = 0; j < i; j++) {
    // 내가 이전 결과보다 크고, 이전 결과에 +1한 것보다 작으면
    if (arrA[i] > arrA[j] && dp[i] < dp[j] + 1) {
      // 제일 큰 값으로 업데이트
      dp[i] = dp[j] + 1;
    }
  }
}

console.log(Math.max(...dp));
