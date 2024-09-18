const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const node = input.slice(1, N);

const graph = Array.from(Array(N + 1), () => []);

node.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

const queue = [];
const parents = [];

function bfs() {
  parents[1] = 1;
  for (let next of graph[1]) {
    parents[next] = 1;
    queue.push(next);
  }

  while (queue.length) {
    const current = queue.shift();

    for (let next of graph[current]) {
      if (!parents[next]) {
        parents[next] = current;
        queue.push(next);
      }
    }
  }
}

bfs();

for (let i = 2; i < parents.length; i++) {
  console.log(parents[i]);
}
