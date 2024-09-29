const input = Number(
  require('fs').readFileSync('dev/stdin').toString().trim()
);

const queue = [];

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

let start = -1;

while (true) {
  start++;
  if (queue.length - start === 1) {
    break;
  }
  start++;
  queue.push(queue[start]);
}

console.log(queue[start]);

