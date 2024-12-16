const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

const total_sum = input.reduce((a, c) => a + c);
const sum = total_sum - 100;
let result;

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === sum) {
      result = input.filter((_, idx) => idx !== i && idx !== j);
      break;
    }
  }
}

console.log(result.join('\n'));
