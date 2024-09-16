const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const count = input[0][0];
const pair = input[1][0];

const array = input.slice(2, 2 + pair);

graph();

function graph() {
  const graph = Array.from(Array(count + 1), () => []);

  array.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const visited = Array(count + 1).fill(0);

  const queue = [1];
  visited[1] = 1;

  while (queue.length) {
    const current = queue.shift();

    graph[current].forEach((next) => {
      if (!visited[next]) {
        visited[next] = 1;
        queue.push(next);
      }
    });
  }
  console.log(visited.filter((item) => item).length - 1);
}
