const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const M = input[0][1];
const R = input[0][2];

const Maps = input.slice(1);
const graph = Array.from(Array(N + 1), () => []);

Maps.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

graph.sort((neighbors) => neighbors.sort((a, b) => a - b));

const visited = Array.from(Array(N + 1).fill(0));

let order = 1;

function DFS(start) {
  visited[start] = order++;

  graph[start].forEach((next) => {
    if (!visited[next]) {
      DFS(next);
    }
  });
}

DFS(R);

for (let i = 1; i <= N; i++) {
  console.log(visited[i]);
}
