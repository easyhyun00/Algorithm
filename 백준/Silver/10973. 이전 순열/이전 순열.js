const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const arr = input[1];

/**
 * 뒤에서부터 확인했을 때, 오름차순이 깨지는 부분 index 구함
 * ex) 이전: 1 3 4 5 2
 * ex) 현재: 1 3 5 4 2
 * ex) 다음: 1 4 2 3 5
 */

let startIndex = -1;
for (let i = N - 1; i > 0; i--) {
  if (arr[i] < arr[i - 1]) {
    startIndex = i;
    break;
  }
}

if (startIndex === -1) {
  console.log(-1);
  process.exit(0);
}

/**
 * startIndex보다 작은 것들 중에 제일 큰 것
 */

let changeIndex = startIndex;
for (let i = startIndex; i < N; i++) {
  if (arr[startIndex - 1] > arr[i] && arr[changeIndex] < arr[i]) {
    changeIndex = i;
  }
}

/**
 * startIndex, changeIndex 교환
 */

[arr[startIndex - 1], arr[changeIndex]] = [
  arr[changeIndex],
  arr[startIndex - 1],
];

/**
 * 뒷부분 내림차순 정렬
 */

const arr1 = arr.slice(0, startIndex);
const arr2 = arr.slice(startIndex).sort((a, b) => b - a);

const result = arr1.concat(arr2);

console.log(result.join(' '));
