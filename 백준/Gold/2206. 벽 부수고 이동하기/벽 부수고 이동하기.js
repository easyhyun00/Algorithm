const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const Maps = input.slice(1).map((el) => el.split('').map(Number));
// 벽 뿌순 여부까지 포함해서 3차원 배열로 만듦
const visited = Array.from(Array(N), () =>
  Array.from(Array(M), () => Array(2).fill(false))
);

// 상하좌우
const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function BFS() {
  // x좌표, y좌표, 벽 뿌심 여부, 거리
  const queue = [[0, 0, 0, 1]];
  visited[0][0][0] = true;

  let front = 0;
  while (front < queue.length) {
    const [a, b, broke, length] = queue[front++];

    if (a === N - 1 && b === M - 1) {
      return length;
    }

    direction.forEach(([i, j]) => {
      const newX = a + i;
      const newY = b + j;

      if (newX >= 0 && newX < N && newY >= 0 && newY < M) {
        // 벽 안뿌시고 그냥 감
        if (Maps[newX][newY] === 0 && !visited[newX][newY][broke]) {
          queue.push([newX, newY, broke, length + 1]);
          visited[newX][newY][broke] = true;
        }
        // 벽 뿌시고 감
        if (Maps[newX][newY] === 1 && broke === 0 && !visited[newX][newY][0]) {
          queue.push([newX, newY, 1, length + 1]);
          visited[newX][newY][1] = true;
        }
      }
    });
  }
  return -1;
}

console.log(BFS());
