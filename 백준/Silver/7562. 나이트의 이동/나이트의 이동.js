const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [C] = input[0];

let index = 1;

const directions = [
  [-2, 1],
  [-1, 2],
  [2, 1],
  [1, 2],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

const BFS = (a, b, visited, L, a1, b1) => {
  const queue = [[a, b, 0]];
  visited[a][b] = true;

  while (queue.length) {
    const [x, y, cnt] = queue.shift();

    if (x === a1 && y === b1) {
      return cnt;
    }

    directions.forEach(([i, j]) => {
      const newX = x + i;
      const newY = y + j;

      if (
        newX >= 0 &&
        newX < L &&
        newY >= 0 &&
        newY < L &&
        !visited[newX][newY]
      ) {
        visited[newX][newY] = true;
        queue.push([newX, newY, cnt + 1]);
      }
    });
  }
};

for (let i = 0; i < C; i++) {
  const [L] = input[index++ + i];
  const [a1, a2] = input[index++ + i];
  const [b1, b2] = input[index + i];

  const visited = Array.from({ length: L }, () => new Array(L).fill(false));

  const result = BFS(a1, a2, visited, L, b1, b2);
  console.log(result);
}
