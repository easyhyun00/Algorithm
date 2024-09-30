const input = require('fs').readFileSync('/dev/stdin').toString();

const N = Number(input);

let arr = Array.from(Array(N + 1));
arr[0] = 0;
arr[1] = 1;

function Fibonacci(n) {
  if (n === 0) {
    return arr[0];
  }
  if (n === 1) {
    return arr[1];
  }

  if (arr[n]) {
    return arr[n];
  } else {
    return (arr[n] = BigInt(Fibonacci(n - 2)) + BigInt(Fibonacci(n - 1)));
  }
}

Fibonacci(N);

console.log(arr[N].toString());
