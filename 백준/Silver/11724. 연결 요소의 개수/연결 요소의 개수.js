const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const M = input[0][1];

const tree = input.slice(1, 1 + M);

const graph = Array.from(Array(N + 1), () => []);

tree.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

graph.sort((neighbors) => neighbors.sort((a, b) => a - b));

const visited = Array(N + 1).fill(false);

function BFS(start) {
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const current = queue.shift();

    graph[current].forEach((next) => {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    });
  }
}

let count = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    BFS(i);
    count++;
  }
}

console.log(count);
