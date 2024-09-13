const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

solution(input);

function solution(input) {
  let N = input[0][0];
  let result = 0;

  function dfs(index, money) {
    if (index >= N) {
      result = Math.max(result, money);
      return;
    }

    let [T, P] = input[index + 1];

    if (index + T <= N) {
      dfs(index + T, money + P);
    }

    dfs(index + 1, money);
  }

  dfs(0, 0);

  console.log(result);
}
