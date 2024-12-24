const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let result = [];

for (let i = 0; i < input.length; i++) {
  const N = input[i];

  let num = 0;

  for (let j = 1; ; j++) {
    num = (num * 10 + 1) % N;

    if (num === 0) {
      result.push(j);
      break;
    }
  }
}

console.log(result.join('\n'));
