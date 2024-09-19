const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0].split(' ')[0]);
const M = Number(input[0].split(' ')[1]);

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const map = input.slice(1, 1 + N).map((el) => el.split('').map(Number));

function bfs() {
  const que = [[0, 0, 1]]; // 행, 열, 지나간 회수
  map[0][0] = 0; // 지나감

  while (que.length) {
    const [row, col, distance] = que.shift();

    if (row === N - 1 && col === M - 1) {
      return distance;
    }

    // 이동
    for (let [r, c] of direction) {
      const newRow = row + r;
      const newCol = col + c;

      if (
        newRow >= 0 &&
        newRow < N &&
        newCol >= 0 &&
        newCol < M &&
        map[newRow][newCol] === 1
      ) {
        que.push([newRow, newCol, distance + 1]);
        map[newRow][newCol] = 0;
      }
    }
  }
}

console.log(bfs());
