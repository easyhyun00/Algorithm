const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

for (let c = 0; c < input[0][0]; c++) {
  const I = input[3 * c + 1][0];
  const current = input[3 * c + 2];
  const target = input[3 * c + 3];

  const visited = Array.from(Array(I), () => Array(I).fill(false));

  const directions = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [1, -2],
    [-1, 2],
    [1, 2],
  ];

  function BFS(x, y, move) {
    const queue = [[x, y, move]];
    visited[x][y] = true;

    if (x === target[0] && y === target[1]) {
      return 0;
    }

    while (queue.length) {
      const [i, j, mv] = queue.shift();

      for (let [a, b] of directions) {
        const newX = a + i;
        const newY = b + j;

        if (
          newX >= 0 &&
          newX < I &&
          newY >= 0 &&
          newY < I &&
          !visited[newX][newY]
        ) {
          if (newX === target[0] && newY === target[1]) {
            return mv + 1;
          }
          visited[newX][newY] = true;
          queue.push([newX, newY, mv + 1]);
        }
      }
    }
    return -1;
  }

  const result = BFS(current[0], current[1], 0);
  console.log(result);
}
