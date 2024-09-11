const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

solution(input);

function solution(input) {
  let A = Number(input[0]);
  let B = Number(input[1]);
  let C = Number(input[2]);
  let D = Number(input[3]);
  let E = Number(input[4]);
  let F = Number(input[5]);

  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (A * i + B * j == C && D * i + E * j == F) {
        console.log(i, j);
        break;
      }
    }
  }
}