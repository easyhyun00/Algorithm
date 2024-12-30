const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let primeCount = 0;

for (let i = 0; i < N; i++) {
  const num = arr[i];

  if (num < 2) continue;

  let isPrime = true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) primeCount++;
}

console.log(primeCount);
