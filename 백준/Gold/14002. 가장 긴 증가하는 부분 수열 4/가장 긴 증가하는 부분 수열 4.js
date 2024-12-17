const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const map = Array.from({ length: N }, () => []);
map[0].push(arr[0]);

for (let i = 1; i < N; i++) {
  map[i].push(arr[i]);
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      if (map[i].length < map[j].length + 1) {
        map[i] = [...map[j], arr[i]];
      }
    }
  }
}

let result = [];

for (let i = 0; i < N; i++) {
  if (result.length < map[i].length) {
    result = map[i];
  }
}

console.log(result.length);
console.log(result.join(' '));
