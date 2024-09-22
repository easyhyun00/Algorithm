const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

const N = Number(input[0]);
const K = Number(input[1]);

function BFS(sum, count) {
  const visited = Array(100001).fill(false);
  const queue = [[sum, count]];
  visited[sum] = true;

  while (queue.length) {
    const [current, time] = queue.shift();

    if (current === K) {
      return time;
    }

    const nextPositions = [current - 1, current + 1, current * 2];
    for (const next of nextPositions) {
      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(BFS(N, 0));
