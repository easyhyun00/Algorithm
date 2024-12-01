const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [K, N] = input.shift().split(' ');
const arr = input.map(Number);
let result = 0;

const binarySearch = () => {
  let left = 1;
  let right = Math.max(...arr);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    // mid길이만큼 자를 때 랜선 개수
    arr.forEach((item) => {
      count += Math.floor(item / mid);
    });

    // 필요한 개수보다 크다
    if (count >= N) {
      result = mid; // 일단 값으로
      left = mid + 1; // 길이 늘려서 최대한 개수 줄여봄
    } else {
      // 필요한 개수보다 부족함
      right = mid - 1; // 자를 길이를 줄임
    }
  }
};

binarySearch();
console.log(result);
