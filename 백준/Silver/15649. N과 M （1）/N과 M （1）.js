const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, M] = input;

const visited = new Array(N + 1).fill(false);

const BFS = (len, arr) => {
  if (len === M) {
    console.log(arr.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      BFS(len + 1, [...arr, i]);
      visited[i] = false;
    }
  }
};

BFS(0, []);
