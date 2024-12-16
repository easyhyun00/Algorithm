const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((item) => item.split(''));

// 특정 행(col)에서 최대 사탕 개수 구하기 →
const getMaxCandyByCol = (col) => {
  let count = 1;
  let maxCandy = 1;

  if (col >= N) return maxCandy;

  for (let i = 1; i < N; i++) {
    // 같으면 => 개수 증가, 최대 캔디 갱신
    if (arr[col][i] === arr[col][i - 1]) {
      count++;
      maxCandy = Math.max(maxCandy, count);
    }
    // 다르면 => 연속 개수 초기화
    else {
      count = 1;
    }
  }
  return maxCandy;
};

// 특정 열(row)에서 최대 사탕 개수 구하기 ↓
const getMaxCandyByRow = (row) => {
  let count = 1;
  let maxCandy = 1;

  if (row >= N) return maxCandy;

  for (let i = 1; i < N; i++) {
    // 범위체크, 아래에 있는 게 N보다 작아야 함

    // 같으면 => 개수 증가, 최대 캔디 갱신
    if (arr[i][row] === arr[i - 1][row]) {
      count++;
      maxCandy = Math.max(maxCandy, count);
    }
    // 다르면 => 연속 개수 초기화
    else {
      count = 1;
    }
  }
  return maxCandy;
};

let maxCandy = 1;

// 전체 최대 사탕 개수 구함
for (let i = 0; i < N; i++) {
  maxCandy = Math.max(getMaxCandyByCol(i), maxCandy);
  maxCandy = Math.max(getMaxCandyByRow(i), maxCandy);
}

// 위치 변경 후, 최대 사탕 개수 구함
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 옆(오른쪽)에 있는 거랑 바꿈
    if (j + 1 < N) {
      // 교환
      [arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];

      maxCandy = Math.max(
        getMaxCandyByCol(i),
        getMaxCandyByCol(i + 1),
        getMaxCandyByRow(j),
        getMaxCandyByRow(j + 1),
        maxCandy
      );

      // 원상복구
      [arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];
    }

    // 밑(아래)에 있는 거랑 바꿈
    if (i + 1 < N) {
      // 교환
      [arr[i][j], arr[i + 1][j]] = [arr[i + 1][j], arr[i][j]];

      maxCandy = Math.max(
        getMaxCandyByCol(i),
        getMaxCandyByCol(i + 1),
        getMaxCandyByRow(j),
        getMaxCandyByRow(j + 1),
        maxCandy
      );

      // 원상복구
      [arr[i][j], arr[i + 1][j]] = [arr[i + 1][j], arr[i][j]];
    }
  }
}

console.log(maxCandy)