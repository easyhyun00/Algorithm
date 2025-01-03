const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const len = Math.floor(Math.sqrt(input));

/**
 * [BFS]
 * BFS로 최단개수 구함
 */
const visited = new Array(input + 1).fill(false);

const BFS = () => {
  const queue = [[0, 0]]; // 합, 개수
  visited[0] = true;

  while (queue.length) {
    const [sum, cnt] = queue.shift();

    // sum이 Input이면 반환
    if (sum === input) {
      return cnt;
    }

    for (let i = len; i > 0; i--) {
      const next = sum + i ** 2;

      if (next <= input && !visited[next]) {
        queue.push([next, cnt + 1]);
        visited[next] = true;
      }
    }
  }
};

const result = BFS();
console.log(result);
