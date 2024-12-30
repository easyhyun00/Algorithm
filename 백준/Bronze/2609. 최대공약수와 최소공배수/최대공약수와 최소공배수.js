const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [A, B] = input;

/**
 * [유클리드 호제법]
 * 두 수의 최대공약수는 작은 수와 두 수의 차의 최대공약수와 같다.
 *
 * [최대공약수]
 * 1. GCD(24, 18): 24 mod 18 = 6
 * 2. GCD(18, 6): 18 mod 6 = 0
 * 3. 결과: 6
 *
 * [최소공배수]
 * LCM = (A x B) / GCD
 */
let i = Math.max(A, B);
let j = Math.min(A, B);

while (1) {
  const n = i % j;

  if (n === 0) {
    break;
  }

  i = j;
  j = n;
}

console.log(j);
console.log((A * B) / j);
