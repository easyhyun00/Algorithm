const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const arrN = input[1].sort((a, b) => a - b);
const arrM = input[3];

// 이분탐색
const binarySearch = (arr, item) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === item) return true;
    if (arr[mid] > item) right = mid - 1;
    else left = mid + 1;
  }
  return false;
};

const result = arrM.map((item) => (binarySearch(arrN, item) ? 1 : 0));
console.log(result.join(' '));
