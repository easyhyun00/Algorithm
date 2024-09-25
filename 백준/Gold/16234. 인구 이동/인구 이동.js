const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const L = input[0][1];
const R = input[0][2];

const Maps = input.slice(1);

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 인구 이동 날짜
let days = 0;

// 탐색
function BFS(i, j, visited) {
  const queue = [[i, j]];
  const union = [[i, j]]; // 나라 연합
  let person_count = Maps[i][j]; // 인구수 저장

  visited[i][j] = true; // 방문

  while (queue.length) {
    const [ii, jj] = queue.shift();

    direction.forEach(([x, y]) => {
      const newX = x + ii;
      const newY = y + jj;

      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < N &&
        !visited[newX][newY]
      ) {
        // 차이가 유효하면
        const diff = Math.abs(Maps[ii][jj] - Maps[newX][newY]);
        if (diff >= L && diff <= R) {
          // 방문 여부 체크, 다음 queue 넣고, 연합에 넣고, 인구수 더함
          visited[newX][newY] = true;
          queue.push([newX, newY]);
          union.push([newX, newY]);
          person_count += Maps[newX][newY];
        }
      }
    });
  }

  // [인구 이동 계산]
  // 연합 인구 수 / 연합 길이 해서 인구수를 구한 후 각각 인구수로 넣기
  const newPerson = Math.floor(person_count / union.length);
  union.forEach(([x, y]) => {
    Maps[x][y] = newPerson;
  });

  // 연합이 있다 = 이동을 함 true 반환
  return union.length > 1;
}

while (1) {
  // 방문 여부 (날짜가 지날때마다 방문 여부 초기화 해야 되므로 while 문 안에)
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  // 더 이상 인구 이동할 수 있는지 여부
  let isMove = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        if (BFS(i, j, visited)) {
          // true이면 인구 이동 1번했고, 다음 확인하면 됨
          isMove = true;
        }
      }
    }
  }

  // 이동할게 없으면 빠져나오기
  if (!isMove) break;
  // 이동할게 있으면 날짜 증가
  days++;
}

console.log(days);
