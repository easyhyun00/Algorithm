const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const result = input[0][1];
const arr = input[1];
let count = 0;

function backtrack(sum, index, list) {
  if (sum === result && list.length > 0) {
    count++;
  }

  for (let i = index; i < N; i++) {
    backtrack(sum + arr[i], i + 1, [...list, arr[i]]);
  }
}

backtrack(0, 0, []);
console.log(count);
