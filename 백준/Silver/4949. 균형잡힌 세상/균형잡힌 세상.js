const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

for (let item of input) {
  const data = item.split('');

  if (data.length === 1) break;

  const queue = [];
  let flag = true;

  for (let word of data) {
    if (word === '(') {
      queue.push('(');
    } else if (word === '[') {
      queue.push('[');
    } else if (word === ')') {
      if (queue.length === 0 || queue[queue.length - 1] === '[') {
        flag = false;
        break;
      }
      queue.pop();
    } else if (word === ']') {
      if (queue.length === 0 || queue[queue.length - 1] === '(') {
        flag = false;
        break;
      }
      queue.pop();
    }
  }

  if (flag && queue.length === 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
