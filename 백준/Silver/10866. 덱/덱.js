const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const queue = [];

const solution = (text, number) => {
  switch (text) {
    case 'push_front':
      queue.unshift(number);
      break;
    case 'push_back':
      queue.push(number);
      break;
    case 'pop_front':
      return queue.shift() || -1;
    case 'pop_back':
      return queue.pop() || -1;
    case 'size':
      return queue.length;
    case 'empty':
      return queue.length ? 0 : 1;
    case 'front':
      return queue[0] || -1;
    case 'back':
      return queue[queue.length - 1] || -1;
  }
};

const print = [];

for (let i = 1; i <= N; i++) {
  const [text, number] = input[i].split(' ');

  const result = solution(text, number);

  if (result !== undefined) print.push(result);
}

console.log(print.join('\n'));
