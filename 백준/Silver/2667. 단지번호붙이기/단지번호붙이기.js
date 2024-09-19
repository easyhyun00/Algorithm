const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const map = input.slice(1, 1 + N).map((el) => el.split('').map(Number));

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function bfs(i, j) {
  let count = 1;
  const que = [[i, j]]; // 행, 열
  map[i][j] = 0; // 지나감

  while (que.length) {
    const [row, col] = que.shift();

    for (let [r, c] of direction) {
      const newRow = row + r;
      const newCol = col + c;

      if (
        newRow >= 0 &&
        newRow < N &&
        newCol >= 0 &&
        newCol < N &&
        map[newRow][newCol] === 1
      ) {
        count += 1;
        que.push([newRow, newCol]);
        map[newRow][newCol] = 0;
      }
    }
  }
  return count;
}

let totalCount = 0;
let result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      const houseCount = bfs(i, j);
      result.push(houseCount);
      totalCount += 1;
    }
  }
}

console.log(totalCount);
console.log(result.sort((a, b) => a - b).join('\n'));
