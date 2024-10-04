const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split('\n')
  .map(Number);

const N = input[0];
let arr = input.slice(1);

let result = [];

function DFS(i, start, visited) {
  if (!visited[i]) {
    visited[i] = true;
    return DFS(arr[i] - 1, start, visited);
  } else {
    return i === start;
  }
}

for (let i = 0; i < N; i++) {
  let visited = Array(N).fill(false);
  if (DFS(i, i, visited)) {
    result.push(i + 1);
  }
}

console.log(result.length);
console.log(result.join('\n'));
