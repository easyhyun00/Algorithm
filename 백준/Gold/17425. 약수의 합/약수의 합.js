const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = input.slice(1);
let result = [];

// [1] 약수 합
const max = Math.max(...arr);
const divisor = new Array(max + 1).fill(0);

/**
 * i = 2 일 때,
 * divisor[2], [4], [6], [8], ..., [10000] 에다가
 * i 값을 더함.
 *
 * 그러면 divisor[j]에는 모든 약수들의 합이 들어가게 됨.
 */
for (let i = 1; i <= max; i++) {
  for (let j = i; j <= max; j += i) {
    divisor[j] += i;
  }
}

// [2] 누적 합
const sum = new Array(max + 1).fill(0);

/**
 * 이전 누적합 sum[i-1]에서
 * 현재 수의 약수 합을 더해,
 * sum[i]의 약수 합을 구함
 */
for (let i = 1; i <= max; i++) {
  sum[i] = sum[i - 1] + divisor[i];
}

// [3] 특정 수까지의 누적합을 결과에 넣음
arr.forEach((item) => {
  result.push(sum[item]);
});

// 출력
console.log(result.join('\n'));