const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const N = input[0][0];
const M = input[0][1];
const K = input[0][2];

const trash = input.slice(1);
const Maps = Array.from(Array(N), () => Array(M).fill(0));
const visited = Array.from(Array(N), () => Array(M).fill(false));

trash.forEach(([a, b]) => {
  Maps[a - 1][b - 1] = 1;
});

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let result = [];

function BFS(i, j, count) {
  const queue = [[i, j]];
  visited[i][j] = false;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let [a, b] of direction) {
      const newX = a + x;
      const newY = b + y;

      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < M &&
        Maps[newX][newY] === 1 &&
        !visited[newX][newY]
      ) {
        visited[newX][newY] = true;
        queue.push([newX, newY]);
        count++;
      }
    }
  }
  result.push(count);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (Maps[i][j] === 1 && !visited[i][j]) {
      BFS(i, j, 0);
    }
  }
}

console.log(Math.max(...result));
