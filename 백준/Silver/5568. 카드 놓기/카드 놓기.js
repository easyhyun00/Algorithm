const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input) {
  let card_count = Number(input[0]);
  let select_count = Number(input[1]);

  let set = new Set();

  function bfs(number, index) {
    if (number.length === select_count) {
      set.add(number.join(''));
      return;
    }

    for (let i = 0; i < card_count; i++) {
      if (index.includes(i)) continue;

      index.push(i);
      number.push(input[i + 2]);
      bfs([...number], [...index]);
      index.pop();
      number.pop();
    }
  }

  bfs([], []);

  console.log(set.size);
}
