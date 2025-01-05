const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const list = input[1].split(' ');

const visited = new Array(10).fill(false);

let minNum = '9'.repeat(N + 1);
let maxNum = '0'.repeat(N + 1);

/**
 * [백트래킹]
 * 숫자 조합 구함
 */
const backTracking = (arr) => {
  if (arr.length === N + 1) {
    const str = arr.join('');

    if (str > maxNum) maxNum = str;
    if (str < minNum) minNum = str;

    return;
  }

  // 처음 시작하는 수
  if (arr.length === 0) {
    for (let i = 0; i < 10; i++) {
      visited[i] = true;
      backTracking([...arr, i]);
      visited[i] = false;
    }
  }

  // 부등호 확인
  const sign = list[arr.length - 1];

  if (sign === '<') {
    for (let i = 0; i < 10; i++) {
      if (!visited[i] && arr[arr.length - 1] < i) {
        visited[i] = true;
        backTracking([...arr, i]);
        visited[i] = false;
      }
    }
  } else {
    for (let i = 0; i < 10; i++) {
      if (!visited[i] && arr[arr.length - 1] > i) {
        visited[i] = true;
        backTracking([...arr, i]);
        visited[i] = false;
      }
    }
  }
};

backTracking([]);

console.log(maxNum);
console.log(minNum);
