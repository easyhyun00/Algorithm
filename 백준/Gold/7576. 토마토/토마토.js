const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [M, N] = input[0];
const map = input.slice(1);

/**
 * 하루가 지나면,
 * 익은 토마토 인전한 곳이 익는다. (상하좌우)
 * 며칠 지나야 토마토가 익는지
 * => BFS
 *
 * 1: 익음, 0: 안 익음, -1: 비었음
 *
 * 만약 다 안 익으면 -1 반환 (안 익은 개수가 1이상이면 -1)
 */

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = Array.from({ length: N }, () => Array(M).fill(false));

let unFruits = 0;
let result = 0;

const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      queue.push([i, j, 0]);
      visited[i][j] = true;
    } else if (map[i][j] === 0) {
      unFruits++;
    }
  }
}

let index = 0;
while (queue.length > index) {
  const [x, y, day] = queue[index++];

  directions.forEach(([a, b]) => {
    const newX = a + x;
    const newY = b + y;

    if (
      newX >= 0 &&
      newX < N &&
      newY >= 0 &&
      newY < M &&
      map[newX][newY] === 0 &&
      !visited[newX][newY]
    ) {
      map[newX][newY] = 1;
      visited[newX][newY] = true;
      queue.push([newX, newY, day + 1]);
      unFruits--;
    }
  });
  result = day;
}

console.log(unFruits === 0 ? result : -1);
