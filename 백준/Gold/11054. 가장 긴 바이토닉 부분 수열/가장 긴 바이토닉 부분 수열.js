const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const array = input.splice(1)[0];

// 가장 긴 증가하는 부분
const dp1 = new Array(N + 1).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] > array[j]) {
      dp1[i] = Math.max(dp1[i], dp1[j] + 1);
    }
  }
}

// 가장 긴 감소하는 부분
const dp2 = new Array(N + 1).fill(1);

for (let i = N - 2; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (array[i] > array[j]) {
      dp2[i] = Math.max(dp2[i], dp2[j] + 1);
    }
  }
}

let result = 0;
for (let i = 0; i < N; i++) {
  result = Math.max(dp1[i] + dp2[i] - 1, result);
}

console.log(result);
