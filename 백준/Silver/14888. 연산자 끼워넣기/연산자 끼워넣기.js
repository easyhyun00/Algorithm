const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const Arr = input[1];
const Operator = input[2];

let maxResult = -Infinity;
let minResult = Infinity;

function backtrack(idx, sum, list) {
  if (idx === N) {
    maxResult = Math.max(maxResult, sum);
    minResult = Math.min(minResult, sum);
    return;
  }

  if (list[0] > 0) {
    list[0]--;
    backtrack(idx + 1, sum + Arr[idx], [...list]);
    list[0]++;
  }

  if (list[1] > 0) {
    list[1]--;
    backtrack(idx + 1, sum - Arr[idx], [...list]);
    list[1]++;
  }

  if (list[2] > 0) {
    list[2]--;
    backtrack(idx + 1, sum * Arr[idx], [...list]);
    list[2]++;
  }

  if (list[3] > 0) {
    list[3]--;
    let divisionResult;
    if (sum < 0) {
      divisionResult = -Math.floor(-sum / Arr[idx]);
    } else {
      divisionResult = Math.floor(sum / Arr[idx]);
    }
    backtrack(idx + 1, divisionResult, [...list]);
    list[3]++;
  }
}

backtrack(1, Arr[0], Operator);
console.log(maxResult === 0 ? 0 : maxResult);
console.log(minResult === 0 ? 0 : minResult);
