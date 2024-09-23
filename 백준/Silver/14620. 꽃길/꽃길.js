const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const Maps = input.slice(1);

const visited = Array.from(Array(N), () => Array(N).fill(false));

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let totalCost = Infinity;

// 꽃 심을 수 있는지 여부
function isCanPlant(i, j) {
  if (visited[i][j] === true) return false;

  for (let [x, y] of direction) {
    const newX = x + i;
    const newY = y + j;

    if (visited[newX][newY] === true) return false;
  }

  return true;
}

// 꽃 심기 비용 계산
function getCost(i, j) {
  let cost = Maps[i][j];

  for (let [x, y] of direction) {
    const newX = x + i;
    const newY = y + j;

    cost += Maps[newX][newY];
  }

  return cost;
}

// 꽃 심음 표시
function plantFlower(i, j, state) {
  visited[i][j] = state;

  for (let [x, y] of direction) {
    const newX = x + i;
    const newY = y + j;

    visited[newX][newY] = state;
  }
}

function solution(list, cost) {
  if (list.length === 3) {
    totalCost = Math.min(totalCost, cost);
    return;
  }

  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < N - 1; j++) {
      if (isCanPlant(i, j)) {
        const newCost = getCost(i, j);
        plantFlower(i, j, true);
        solution([...list, [i, j]], cost + newCost);
        plantFlower(i, j, false);
      }
    }
  }
}

solution([], 0);
console.log(totalCost);
