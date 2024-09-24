const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = input.slice(1).map((el) => el.split(''));
const visit = Array.from(Array(M), () => Array(N).fill(false));

// 상하좌우
const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function BFS(i, j, team) {
  let count = 1;
  const queue = [[i, j]];
  visit[i][j] = true;

  while (queue.length) {
    let [ii, jj] = queue.shift();

    direction.forEach(([x, y]) => {
      const newX = x + ii;
      const newY = y + jj;

      if (
        newX >= 0 &&
        newX < M &&
        newY >= 0 &&
        newY < N &&
        !visit[newX][newY] &&
        map[newX][newY] === team
      ) {
        count++;
        visit[newX][newY] = true;
        queue.push([newX, newY]);
      }
    });
  }
  return count;
}

let W_sum = 0;
let B_sum = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 'W' && !visit[i][j]) {
      const count = BFS(i, j, 'W');
      W_sum += count * count;
    } else if (map[i][j] === 'B' && !visit[i][j]) {
      const count = BFS(i, j, 'B');
      B_sum += count * count;
    }
  }
}

console.log(W_sum, B_sum);
