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

const Q = input[N][0];

const result = [];

for (let i = N + 1; i <= N + Q; i++) {
  const t = input[i][0];
  const k = input[i][1];

  if (t === 1) {
    result.push(graph[k].length === 1 ? 'no' : 'yes');
  } else {
    result.push('yes');
  }
}

console.log(result.join('\n'));