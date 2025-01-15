const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const visited = new Array(input + 1).fill(false);

let result = [];

const backTracing = (arr) => {
  if (arr.length === input) {
    result.push(arr.join(' '));
    return;
  }

  for (let i = 1; i <= input; i++) {
    if (!visited[i]) {
      visited[i] = true;
      backTracing([...arr, i]);
      visited[i] = false;
    }
  }
};

backTracing([]);
console.log(result.join('\n'));
