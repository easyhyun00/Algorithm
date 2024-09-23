const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];

const Maps = input.slice(1);

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const set = new Set();
Maps.forEach((item) => item.forEach((item2) => set.add(item2)));
const serArr = [...set].sort((a, b) => a - b);

let result = [1];

for (let i = 0; i < serArr.length; i++) {
  const water = serArr[i];
  const waterMaps = Array.from(Array(N), () => Array(N).fill(0));

  function BFS(xx, yy) {
    const queue = [[xx, yy]];
    waterMaps[xx][yy] = 1;

    while (queue.length) {
      const [xxx, yyy] = queue.shift();

      direction.forEach(([xn, yn]) => {
        const newX = xn + xxx;
        const newY = yn + yyy;

        if (
          newX >= 0 &&
          newX < N &&
          newY >= 0 &&
          newY < N &&
          Maps[newX][newY] > water &&
          waterMaps[newX][newY] === 0
        ) {
          waterMaps[newX][newY] = 1;
          queue.push([newX, newY]);
        }
      });
    }
  }

  let count = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (Maps[x][y] > water && waterMaps[x][y] === 0) {
        BFS(x, y);
        count++;
      }
    }
  }

  result.push(count);
}

console.log(Math.max(...result));
