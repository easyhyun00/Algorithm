const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N] = input.shift();
const arr = input[0].sort((a, b) => a - b);

let result = 0;

// 1 2 3 3 5
for (let i = 0; i < N; i++) {
  result += arr[i] * (N - i);
  // 1 + 3 + 6 + 10 + 13
  // 1 * 5 = 5
  // 2 * 4 = 8
  // 3 * 3 = 9
  // 3 * 2 = 6
  // 4 * 1 = 4
}

console.log(result);
