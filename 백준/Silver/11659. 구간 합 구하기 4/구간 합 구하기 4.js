const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, M] = input[0];
const arr = input[1];

const sumArr = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  sumArr[i] = sumArr[i - 1] + arr[i - 1];
}

let result = [];

for (let i = 2; i < M + 2; i++) {
  const [x, y] = input[i];
  result.push(sumArr[y] - sumArr[x - 1]);
}

console.log(result.join('\n'));
