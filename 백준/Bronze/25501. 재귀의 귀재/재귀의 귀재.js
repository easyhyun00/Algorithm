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
  let len = string.length;

  for (let i = 0; i <= len / 2; i++) {
    cnt++;
    result = string[i] === string[len - 1 - i] ? 1 : 0;
    if (result === 0) break;
  }
  return [result, cnt];
}
