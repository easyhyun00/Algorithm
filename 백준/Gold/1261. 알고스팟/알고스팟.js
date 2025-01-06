const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);
const map = input.slice(1).map((el) => el.split('').map(Number));

// 이동할 수 있는 곳
const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 방문 여부
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const BFS = () => {
  const queue = [[0, 0, 0]]; // x,y,count;
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      return count;
    }

    // 이동
    direction.forEach(([a, b]) => {
      const newX = a + x;
      const newY = b + y;

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < N &&
        newY < M &&
        !visited[newX][newY]
      ) {
        // 벽을 안 부셔도 되는 경우
        if (map[newX][newY] === 0) {
          visited[newX][newY] = true;
          queue.unshift([newX, newY, count]);
        } else {
          visited[newX][newY] = true;
          queue.push([newX, newY, count + 1]);
        }
      }
    });
  }
};

console.log(BFS());
