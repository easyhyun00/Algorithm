const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, K] = input;

const BFS = () => {
  const visited = new Array(100001).fill(false);
  const queue = [[N, N.toString()]];
  visited[N] = true;

  let index = 0;
  while (queue.length > index) {
    const [current, str] = queue[index++];

    if (current === K) return str;

    const direction = [current - 1, current + 1, current * 2];
    direction.forEach((position) => {
      if (!visited[position] && position >= 0 && position <= 100000) {
        queue.push([position, str + ' ' + position]);
        visited[position] = true;
      }
    });
  }
};

const result = BFS();
console.log(result.split(' ').length - 1);
console.log(result);
