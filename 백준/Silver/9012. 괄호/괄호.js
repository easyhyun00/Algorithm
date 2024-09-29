const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const data = input[i].split('');
  const queue = [];

  let isValid = true;

  for (let str of data) {
    if (str === '(') {
      queue.push('(');
    } else {
      if (queue.length === 0) {
        isValid = false;
        break;
      }
      queue.pop();
    }
  }

  if (isValid && queue.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
