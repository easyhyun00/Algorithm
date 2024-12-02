const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const Money = Number(input[2]);

let result = 0;

/**
 * 이분탐색
 */
const binarySearch = () => {
  let start = 1;
  let end = Math.max(...arr);

  while (start <= end) {
    // 중간
    const mid = Math.floor((start + end) / 2);
    let totalPrice = 0;

    arr.forEach((item) => {
      if (item >= mid) {
        totalPrice += mid;
      } else {
        totalPrice += item;
      }
    });

    // 총 가격이 예산보다 적으면
    if (totalPrice <= Money) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

binarySearch();
console.log(result);
