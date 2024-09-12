const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

solution(input);

function solution(input) {
  let A = Number(input[0]);
  let B = Number(input[1]);
  let C = Number(input[2]);
  let M = Number(input[3]);

  let time = 0;
  let heal = 0;
  let result = 0;

  while (time < 24) {
    if (heal + A <= M) {
      time++;
      result += B;
      heal += A;
    } else {
      time++;
      heal -= C;
      if (heal < 0) heal = 0;
    }
  }

  console.log(result);
}