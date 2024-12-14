const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, M] = input[0];
const arr = input.slice(1);

const graph = Array.from({ length: N }, () => new Array());

arr.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

const visited = new Array(N).fill(false);
let found = false; // 찾음

/**
 * 깊이를 찾아야 되므로 DFS
 */
const DFS = (start, depth) => {
  if (depth === 5) {
    found = true;
    return;
  }

  visited[start] = true;

  // forEach로 하면 중간에 못 빠져나옴
  for (let next of graph[start]) {
    if (!visited[next]) {
      DFS(next, depth + 1);
      if (found) return; // 이미 답을 찾았으니 다른 인접 노드는 탐색하지 않음
    }
  }

  visited[start] = false; // 다음 반복문에서도 접근해야 하므로 다시 false로, 백트래킹
};

/**
 * 첫 시작이 연결 그래프가 아닐 수도 있음.
 * 그래서 모든 곳에서 시작해야함
 */
const solution = () => {
  for (let i = 0; i < N; i++) {
    DFS(i, 1);
    if (found) return 1;
  }
  return 0;
};

console.log(solution());
