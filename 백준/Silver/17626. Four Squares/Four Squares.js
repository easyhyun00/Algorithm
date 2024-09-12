const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

solution(Number(input));

function solution(N) {
  let result = 4;

  let sqrt = parseInt(Math.sqrt(N));
  let arr = [];
  for (let i = 1; i <= sqrt; i++) {
    arr.push(i * i);
  }

  arr.sort((a, b) => b - a);

  let memo = new Map();

  function bfs(remain, count) {
    if (count >= 4) return;

    if (remain === 0) {
      result = Math.min(result, count);
      return;
    }

    if (memo.has(remain) && memo.get(remain) <= count) {
      return;
    }

    memo.set(remain, count);

    for (let i = 0; i < arr.length; i++) {
      let nextRemain = remain - arr[i];
      if (nextRemain >= 0) {
        bfs(nextRemain, count + 1);
      }
    }
  }

  bfs(N, 0);

  console.log(result);
}

