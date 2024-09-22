const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split(' ');

const N = Number(input[0]);
const M = Number(input[1]);

const result = [];

function backtrack(list, index) {
  if (list.length === M) {
    result.push(list.join(' '));
    return;
  }

  for (let i = index; i <= N; i++) {
    backtrack([...list, i], i);
  }
}

backtrack([], 1);
console.log(result.join('\n'));
