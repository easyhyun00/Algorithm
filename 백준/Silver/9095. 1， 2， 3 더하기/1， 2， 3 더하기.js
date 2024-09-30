const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

const T = input[0];

const result = [];
const data = [1, 2, 4];

function add_sum(n) {
  if (n === 0) {
    return data[0];
  }
  if (n === 1) {
    return data[1];
  }
  if (n === 2) {
    return data[2];
  }
  if (data[n]) {
    return data[n];
  }
  return (data[n] = add_sum(n - 1) + add_sum(n - 2) + add_sum(n - 3));
}

for (let i = 1; i <= T; i++) {
  result.push(add_sum(input[i] - 1));
}

console.log(result.join('\n'));
