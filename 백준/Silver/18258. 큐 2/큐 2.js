const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const queue = [];
const result = [];
let start = 0;

for (let i = 1; i <= N; i++) {
  const current = input[i].split(' ');
  const commend = current[0];

  switch (commend) {
    case 'push':
      queue.push(current[1]);
      break;
    case 'pop':
      if (start < queue.length) {
        result.push(queue[start]);
        start++;
      } else {
        result.push(-1);
      }
      break;
    case 'size':
      result.push(queue.length - start);
      break;
    case 'empty':
      result.push(queue.length > start ? 0 : 1);
      break;
    case 'front':
      result.push(queue.length > start ? queue[start] : -1);
      break;
    case 'back':
      result.push(queue.length > start ? queue[queue.length - 1] : -1);
      break;
  }
}

console.log(result.join('\n'));
