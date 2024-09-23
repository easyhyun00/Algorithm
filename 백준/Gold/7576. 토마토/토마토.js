const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const M = input[0][0];
const N = input[0][1];

const Maps = input.slice(1);

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let queue = [];
let result = 0;
let unCount = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (Maps[i][j] === 1) {
      queue.push([i, j, 0]);
    } else if (Maps[i][j] === 0) {
      unCount++;
    }
  }
}

let head = 0;
while (queue.length > head) {
  const [x, y, cnt] = queue[head++];
  result = cnt;

  direction.forEach(([xd, yd]) => {
    const newX = x + xd;
    const newY = y + yd;

    if (
      newX >= 0 &&
      newX < N &&
      newY >= 0 &&
      newY < M &&
      Maps[newX][newY] === 0
    ) {
      Maps[newX][newY] = 1;
      queue.push([newX, newY, cnt + 1]);
      unCount--;
    }
  });
}

console.log(unCount > 0 ? -1 : result);
