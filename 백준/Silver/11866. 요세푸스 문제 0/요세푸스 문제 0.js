const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim('')
  .split(' ')
  .map(Number);

const N = input[0];
const K = input[1];
let queue = [];
const result = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let index = 1;
while (queue.length) {
  const current = queue.shift();

  if (index % K === 0) {
    result.push(current);
  } else {
    queue.push(current);
  }

  index++;
}

console.log(`<${result.join(', ')}>`);
