const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const [L, C] = input[0].map(Number);
const arr = input[1].sort();

const vowel = ['a', 'e', 'i', 'o', 'u'];

const visited = new Array(C).fill(false);
const result = [];

const DFS = (index, list) => {
  if (list.length === L) {
    const vowelCount = vowel.filter((item) => list.includes(item)).length;

    if (vowelCount >= 1 && vowelCount <= L - 2) result.push(list.join(''));
    return;
  }

  for (let i = index; i < C; i++) {
    if (!visited[i]) {
      visited[i] = true;

      DFS(i, [...list, arr[i]]);

      visited[i] = false;
    }
  }
};

DFS(0, []);

console.log(result.join('\n'));