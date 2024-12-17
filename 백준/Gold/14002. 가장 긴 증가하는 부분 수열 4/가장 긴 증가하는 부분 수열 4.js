const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const map = Array.from({ length: N }, () => Array.from(N).fill(0));
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

let index = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  if (map[i].length > result) {
    result = map[i].length;
    index = i;
  }
}

console.log(result);
console.log(map[index].join(' '));
