const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split(' ');

const N = Number(input[0]);
const M = Number(input[1]);

const Numbers = [];
for (let i = 1; i < N + 1; i++) {
  Numbers.push(i);
}

function backtrack(list, index) {
  if (list.length === M) {
    console.log(list.join(' '));
    return;
  }

  for (let i = index; i < N; i++) {
    if (list.includes(Numbers[i])) continue;

    backtrack([...list, Numbers[i]], i + 1);
  }
}

backtrack([], 0);
