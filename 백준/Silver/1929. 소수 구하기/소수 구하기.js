const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [A, B] = input;

let result = [];

for (let i = A; i <= B; i++) {
  if (i < 2) continue;

  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) result.push(i);
}

console.log(result.join('\n'));
