const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const M = input[0][1];

const map = input.slice(1, 1 + N);

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let goal = null;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 2) {
      goal = [i, j];
    }
  }
}

const distance = Array.from({ length: N }, (_, i) =>
  map[i].map((val) => (val === 0 ? 0 : -1))
);

const queue = [goal];
distance[goal[0]][goal[1]] = 0;

while (queue.length > 0) {
  const [row, col] = queue.shift();

  for (let [r, c] of direction) {
    const newRow = row + r;
    const newCol = col + c;

    if (
      newRow >= 0 &&
      newRow < N &&
      newCol >= 0 &&
      newCol < M &&
      map[newRow][newCol] === 1 &&
      distance[newRow][newCol] === -1
    ) {
      distance[newRow][newCol] = distance[row][col] + 1;
      queue.push([newRow, newCol]);
    }
  }
}

distance.forEach((row) => {
  console.log(row.join(' '));
});
