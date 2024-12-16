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

const BFS = (index, list) => {
  if (list.length === M) {
    result.push(list.join(' '));
    return;
  }

  for (let i = index; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      BFS(i, [...list, arr[i]]);
      visited[i] = false;
    }
  }
};

BFS(0, []);

console.log(result.join('\n'));
