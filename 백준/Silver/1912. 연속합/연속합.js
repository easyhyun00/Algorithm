const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = input[0][0];

const memo = new Array(n).fill(0);
memo[0] = input[1][0];

for (let i = 1; i < n; i++) {
  memo[i] = Math.max(input[1][i], memo[i - 1] + input[1][i]);
}

console.log(Math.max(...memo));
