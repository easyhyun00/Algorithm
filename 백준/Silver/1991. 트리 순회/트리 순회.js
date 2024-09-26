const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
let result = '';

const tree = {};
for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}

function preOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  result += node;
  preOrder(left);
  preOrder(right);
}

function inOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  inOrder(left);
  result += node;
  inOrder(right);
}

function postOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  postOrder(left);
  postOrder(right);
  result += node;
}

preOrder('A');
result += '\n';
inOrder('A');
result += '\n';
postOrder('A');

console.log(result);
