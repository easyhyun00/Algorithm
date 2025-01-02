const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const arr = input[1];

let index = 0;

for (let i = N - 1; i > 0; i--) {
  if (arr[i - 1] < arr[i]) {
    index = i;
    break;
  }
}

if (index === 0) {
  console.log(-1);
  process.exit(0);
}

let bigIndex = index;
for (let i = N - 1; i >= index; i--) {
  if (arr[i] > arr[index - 1]) {
    bigIndex = i;
    break;
  }
}

[arr[index - 1], arr[bigIndex]] = [arr[bigIndex], arr[index - 1]];

const arr1 = arr.slice(0, index);
const arr2 = arr.slice(index).sort((a, b) => a - b);

let result = arr1.concat(arr2);

console.log(result.join(' '));
