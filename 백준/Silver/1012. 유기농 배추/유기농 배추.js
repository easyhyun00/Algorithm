const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const T = input[0];
let idx = 1;

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const bfs = (maps, startX, startY, M, N) => {
  const queue = [[startX, startY]];
  maps[startX][startY] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of direction) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < M &&
        newY >= 0 &&
        newY < N &&
        maps[newX][newY] === 1
      ) {
        maps[newX][newY] = 0;
        queue.push([newX, newY]);
      }
    }
  }
};

for (let t = 0; t < T; t++) {
  const M = input[idx][0];
  const N = input[idx][1];
  const K = input[idx][2];

  const maps = Array.from({ length: M }, () => Array(N).fill(0));

  for (let i = 0; i < K; i++) {
    const x = input[idx + 1 + i][0];
    const y = input[idx + 1 + i][1];
    maps[x][y] = 1;
  }

  let wormCount = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (maps[i][j] === 1) {
        bfs(maps, i, j, M, N);
        wormCount += 1;
      }
    }
  }

  console.log(wormCount);
  idx += K + 1;
}
