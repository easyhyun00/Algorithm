const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
let input = fs.readFileSync("/dev/stdin");

let index = parseInt(input);
solution(index);

function solution(input) {
  console.log(Fibonacci(input));
}

function Fibonacci(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;

  return Fibonacci(index - 2) + Fibonacci(index - 1);
}
