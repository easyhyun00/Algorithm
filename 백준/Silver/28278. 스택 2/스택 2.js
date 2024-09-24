const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const queue = [];
const result = [];

for (let i = 1; i <= N; i++) {
  const Command = input[i][0];

  switch (Command) {
    case 1:
      queue.push(input[i][1]);
      break;
    case 2:
      result.push(queue.pop() || -1);
      break;
    case 3:
      result.push(queue.length);
      break;
    case 4:
      result.push(queue.length === 0 ? 1 : 0);
      break;
    default:
      const len = queue.length;
      result.push(len ? queue[len - 1] : -1);
      break;
  }
}

console.log(result.join('\n'));
