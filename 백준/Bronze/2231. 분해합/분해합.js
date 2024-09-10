const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

solution(Number(input));

function solution(input) {
  console.log(decomposition(input));
}

function decomposition(input) {
  let len = input.toString().length;

  for (let i = input - len * 9; i < input; i++) {
    let sum = i;
    for (let j = 0; j < i.toString().length; j++) {
      sum += Number(i.toString()[j]);
    }
    if (sum === input) return i;
  }
  return 0;
}