const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input) {
  for (let i = 1; i <= input[0]; i++) {
    const [result, count] = isPalindrome(input[i]);
    console.log(`${result} ${count}`);
  }
}

function isPalindrome(string) {
  let cnt = 0;
  let result;

  for (let i = 0; i <= string.length / 2; i++) {
    cnt++;
    result = recursion(string[i], string[string.length - 1 - i], cnt);
    if (result === 0) break;
  }
  return [result, cnt];
}

function recursion(left, right) {
  if (left === right) return 1;
  else return 0;
}
