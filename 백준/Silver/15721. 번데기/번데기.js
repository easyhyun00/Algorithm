const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

solution(input);

function solution(input) {
  let gameArr = game(Number(input[1]));
  console.log(
    findIndex(gameArr, Number(input[1]), Number(input[2])) % input[0]
  );
}

function game(count) {
  let arr = [];

  let b_cnt = 0;
  let d_cnt = 0;

  let cnt = 1;

  while (1) {
    cnt++;

    for (let i = 0; i < 2; i++) {
      b_cnt++;
      d_cnt++;
      arr.push([b_cnt, 0]);
      arr.push([d_cnt, 1]);
    }

    for (let i = 0; i < cnt; i++) {
      b_cnt++;
      arr.push([b_cnt, 0]);
    }

    for (let i = 0; i < cnt; i++) {
      d_cnt++;
      arr.push([d_cnt, 1]);
    }

    if (b_cnt >= count) break;
  }

  return arr;
}

function findIndex(arr, count, find) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === count && arr[i][1] === find) {
      return i;
    }
  }
  return -1;
}
