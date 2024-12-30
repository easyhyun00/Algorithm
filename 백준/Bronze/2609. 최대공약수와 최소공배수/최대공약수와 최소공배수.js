const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [A, B] = input;

// 최대공약수
const min = Math.min(A, B);
let result = 0;

for (let i = 1; i <= min; i++) {
  if (A % i === 0 && B % i === 0) {
    result = i;
  }
}

// 최소공배수
let copyA = A;
let copyB = B;

while (1) {
  if (copyA === copyB) {
    break;
  }

  if (copyA > copyB) {
    copyB += B;
  } else {
    copyA += A;
  }
}

console.log(result);
console.log(copyA);
