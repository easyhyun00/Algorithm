const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, K] = input;

const visited = new Array(K*2+1).fill(false);

const BFS = () => {
  const queue = [[N, 0]];
  visited[N] = true;
    
  let index = 0;
  while (queue.length > index) {
    const [current, count] = queue[index++];

    if (current === K) return count;

    const direction = [current - 1, current + 1, current * 2];

    direction.forEach((position) => {
      if (!visited[position] && position >= 0 && position <= 100000) {
        queue.push([position, count + 1]);
        visited[position] = true;
      }
    });
  }
};

console.log(BFS());
