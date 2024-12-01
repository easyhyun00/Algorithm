const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ');
const arr = input[1].split(' ').map(Number);
let result = 0;

/**
 * 이분탐색
 */
const binarySearch = () => {
  let left = 1;
  let right = Math.max(...arr);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let total = 0;

    arr.forEach((item) => {
      const cut = item - mid;
      if (cut > 0) {
        total += cut;
      }
    });

    // 자를 양보다 크면
    if (total >= M) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

binarySearch();
console.log(result);
