const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = input.slice(0, -1);

const max = Math.max(...arr);

const primeArr = new Array(max + 1).fill(false);

for (let i = 2; i <= max; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) primeArr[i] = true;
}

let result = [];

arr.forEach((num) => {
  let isTrue = false;

  for (let i = 0; i <= num; i++) {
    if (primeArr[i]) {
      const minus = num - i;

      if (primeArr[minus]) {
        isTrue = true;
        result.push(`${num} = ${i} + ${minus}`);
        break;
      }
    }
  }

  if (!isTrue) result.push("Goldbach's conjecture is wrong.");
});

console.log(result.join('\n'));
