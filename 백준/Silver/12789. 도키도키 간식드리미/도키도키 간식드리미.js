const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
const list = input[1].split(' ').map(Number);

const wait_queue = [];
const queue = [];

while (true) {
  const num1 = list[0];
  const num2 = wait_queue[wait_queue.length - 1];
  const target = queue.length + 1;

  if (target === num1) {
    list.shift();
    queue.push(num1);
  } else if (target === num2) {
    wait_queue.pop();
    queue.push(num2);
  } else {
    if (list.length > 0) {
      list.shift();
      wait_queue.push(num1);
    } else {
      break;
    }
  }
}

console.log(queue.length === N ? 'Nice' : 'Sad');
