const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

const BFS = (start, result) => {
  const queue = [[start, result]];

  while (queue.length) {
    const [current, sum] = queue.shift();

    if (current === B) {
      return sum;
    }

    const nextList = [current * 10 + 1, current * 2];
    nextList.forEach((next) => {
      if (next >= 0 && next <= B) {
        queue.push([next, sum + 1]);
      }
    });
  }
  return -1;
};

console.log(BFS(A, 1));
