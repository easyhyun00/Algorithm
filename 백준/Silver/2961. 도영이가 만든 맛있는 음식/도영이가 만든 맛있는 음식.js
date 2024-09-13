const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

solution(input);

function solution(input) {
  let count = input[0][0];
  let result = Infinity;

  function dfs(index, S, B) {
    if (index === count) {
      if (S !== 1 || B !== 0) {
        let diff = Math.abs(S - B);
        result = Math.min(result, diff);
      }
      return;
    }

    dfs(index + 1, S * input[index + 1][0], B + input[index + 1][1]);
    dfs(index + 1, S, B);
  }

  dfs(0, 1, 0);

  console.log(result);
}
