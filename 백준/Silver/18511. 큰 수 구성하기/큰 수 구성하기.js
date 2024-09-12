const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

solution(input);


function solution(input) {
  let N = input[0][0];
  let KList = input[1];
  let result = 0;

  function dfs(number) {
    if (Number(number) > N) return;

    result = Math.max(result, Number(number));

    if (number.length === N.toString().length) return;

    for (let k of KList) {
      dfs(number + k.toString());
    }
  }

  for (let k of KList) {
    dfs(k.toString());
  }

  console.log(result);
}
