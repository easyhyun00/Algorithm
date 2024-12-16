const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, M] = input[0];
const arr = input[1].sort((a, b) => a - b);
const visited = Array(N).fill(false);
const result = [];

const BFS = (list) => {
  if (list.length === M) {
    result.push(list.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      BFS([...list, arr[i]]);
      visited[i] = false;
    }
  }
};

BFS([]);

console.log(result.join('\n'));
