const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];

const memo = Array.from({ length: N }, () => Array.from({ length: 3 }).fill(0));
memo[0][0] = input[1][0];
memo[0][1] = input[1][1];
memo[0][2] = input[1][2];

for (let i = 2; i <= N; i++) {
  for (let j = 0; j < 3; j++) {
    memo[i - 1][j] =
      Math.min(memo[i - 2][(j + 1) % 3], memo[i - 2][(j + 2) % 3]) +
      input[i][j];
  }
}

console.log(Math.min(...memo[N - 1]));
