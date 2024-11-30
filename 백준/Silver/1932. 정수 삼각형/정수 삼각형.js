const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];

// 1차원 배열
let memo = [...input[N]];

// 밑에서부터 더해가는 방식
for (let i = N - 1; i >= 1; i--) {
  for (let j = 0; j < input[i].length; j++) {
    memo[j] = Math.max(memo[j], memo[j + 1]) + input[i][j];
  }
}

console.log(Math.max(...memo));

