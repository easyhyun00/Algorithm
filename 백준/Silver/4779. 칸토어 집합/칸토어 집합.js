const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(cantor(input[i]));
  }
}

function cantor(line) {
  if (line == 0) return '-';

  let previous = cantor(line - 1);

  return `${previous}${' '.repeat(previous.length)}${previous}`;
}
