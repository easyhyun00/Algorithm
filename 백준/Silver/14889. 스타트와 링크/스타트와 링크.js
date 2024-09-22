const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const arr = Array.from({ length: N }, (_, index) => index + 1);
const map = input.slice(1, 1 + N);

let result = Infinity;

function getPower(list) {
  const A = list;
  const B = arr.filter((item) => !list.includes(item));
  const len = N / 2;

  let A_Power = 0;
  let B_Power = 0;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      A_Power += map[A[i] - 1][A[j] - 1];
      A_Power += map[A[j] - 1][A[i] - 1];
    }
  }

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      B_Power += map[B[i] - 1][B[j] - 1];
      B_Power += map[B[j] - 1][B[i] - 1];
    }
  }

  result = Math.min(result, Math.abs(A_Power - B_Power));
}

function backtrack(list, start) {
  if (list.length === N / 2) {
    getPower(list);
    return;
  }

  for (let i = start; i < N; i++) {
    backtrack([...list, i], i + 1);
  }
}

backtrack([], 1);

console.log(result);
