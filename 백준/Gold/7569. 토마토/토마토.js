const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const M = input[0][0];
const N = input[0][1];
const H = input[0][2];

const Maps = [];
let index = 1;

for (let h = 0; h < H; h++) {
  const layer = [];
  for (let n = 0; n < N; n++) {
    layer.push(input[index++]);
  }
  Maps.push(layer);
}

const direction = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

const queue = [];
let result = 0;
let unCount = 0;

for (let k = 0; k < H; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (Maps[k][i][j] === 1) {
        queue.push([k, i, j, 0]);
      } else if (Maps[k][i][j] === 0) {
        unCount++;
      }
    }
  }
}

if (unCount === 0) {
  console.log(0);
  process.exit();
}

let start = 0;
while (start < queue.length) {
  const [z, x, y, count] = queue[start++];
  result = count;

  for (let [k, i, j] of direction) {
    const newZ = z + k;
    const newX = x + i;
    const newY = y + j;

    if (
      newZ >= 0 &&
      newZ < H &&
      newX >= 0 &&
      newX < N &&
      newY >= 0 &&
      newY < M &&
      Maps[newZ][newX][newY] === 0
    ) {
      Maps[newZ][newX][newY] = 1;
      queue.push([newZ, newX, newY, count + 1]);
      unCount--;
    }
  }
}

console.log(unCount > 0 ? -1 : result);
