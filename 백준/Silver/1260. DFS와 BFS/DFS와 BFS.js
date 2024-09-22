const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const M = input[0][1];
const V = input[0][2];
const tree = input.slice(1, M + 1);

const graph = Array.from(Array(N + 1), () => []);

tree.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

// 오름차순 정렬
graph.forEach((neighbors) => neighbors.sort((a, b) => a - b));

// [DFS] - 깊이 우선 탐색, 주로 재귀로 풀음
const dfsVisited = Array(N + 1).fill(0);
const dfsResult = [];

function DFS(start) {
  dfsVisited[start] = 1;

  dfsResult.push(start);

  graph[start].forEach((next) => {
    if (!dfsVisited[next]) {
      dfsVisited[next] = 1;
      DFS(next);
    }
  });
}

DFS(V);
console.log(dfsResult.join(' '));

// [BFS] - 너비 우선 탐색, queue에 넣어서 탐색
const bfsVisited = Array(N + 1).fill(0);
const bfsResult = [];

function BFS(start) {
  const queue = [start];
  bfsVisited[start] = 1;

  while (queue.length) {
    const node = queue.shift();
    bfsResult.push(node);

    graph[node].forEach((next) => {
      if (!bfsVisited[next]) {
        bfsVisited[next] = 1;
        queue.push(next);
      }
    });
  }
}

BFS(V);
console.log(bfsResult.join(' '));
