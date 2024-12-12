const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, K] = input;
const visited = new Array(100001).fill(false);

const BFS = () => {
  const queue = [[N, 0]]; // [시작 위치, 걸린 시간]
  visited[N] = true;

  while (queue.length) {
    const [pos, time] = queue.shift();

    if (pos === K) return time;

    // 순간 이동
    if (!visited[pos * 2] && pos * 2 <= 100001 && pos >= 0) {
      queue.push([pos * 2, time]);
      visited[pos * 2] = true;
    }

    // 뒤로 이동
    if (!visited[pos - 1] && pos >= 0) {
      queue.push([pos - 1, time + 1]);
      visited[pos - 1] = true;
    }

    // 앞으로 이동
    if (!visited[pos + 1] && pos <= 100000) {
      queue.push([pos + 1, time + 1]);
      visited[pos + 1] = true;
    }
  }
};

console.log(BFS());
