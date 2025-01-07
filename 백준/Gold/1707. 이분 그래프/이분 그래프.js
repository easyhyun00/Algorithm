const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

/**
 * [문제설명]
 * 각 집합에 속한 정점끼리는 서로 인접하지 않도록 분할.
 * 이어져 있다면 다른 그룹이어야 함.
 */

const K = input[0][0];

let nextIndex = 1;

for (let i = 0; i < K; i++) {
  const [V, E] = input[nextIndex];
  const list = input.slice(nextIndex + 1, nextIndex + 1 + E);
  let result = 'YES';

  // 그래프
  const graph = Array.from({ length: V + 1 }, () => []);
  // 방문 여부 및 그룹, 0: 미방문, 1: 그룹 A, -1: 그룹 B
  const visited = new Array(V + 1).fill(0);

  list.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const BFS = (start) => {
    const queue = [start];
    visited[start] = 1; // 그룹 A

    while (queue.length) {
      const current = queue.shift();

      for (let next of graph[current]) {
        if (visited[next] === 0) {
          // 아직 방문하지 않았다면, 인접한 노드와 반대그룹
          visited[next] = -visited[current];
          queue.push(next);
        } else if (visited[next] === visited[current]) {
          // 만약 인접한 노드와 그룹이 같다면
          return false;
        }
      }
    }
    return true;
  };

  // 탐색 시작할 곳
  for (let i = 1; i <= V; i++) {
    if (visited[i] === 0) {
      // 방문 안 했으면 BFS
      if (!BFS(i)) {
        result = 'NO';
        break;
      }
    }
  }

  console.log(result);
  nextIndex += E + 1;
}
