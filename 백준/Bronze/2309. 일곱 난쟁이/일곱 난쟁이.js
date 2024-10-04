const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);

let result = [];

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (input[i] + input[j] === sum - 100) {
      result = input.filter((item) => {
        if (item !== input[i] && item !== input[j]) {
          return item;
        }
      });
    }
  }
}

console.log(result.sort((a, b) => a - b).join('\n'));
