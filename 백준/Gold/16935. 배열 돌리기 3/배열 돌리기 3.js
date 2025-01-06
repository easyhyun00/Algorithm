const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, M, R] = input[0];
const array = input.slice(1, N + 1);
const round = input[N + 1];

/**
 * [1] 배열 상하 반전
 */
const step_one = (arr) => {
  const newN = arr.length;

  const newArr = [];
  for (let i = newN - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

/**
 * [2] 배열 좌우 반전
 */
const step_two = (arr) => {
  const newN = arr.length;

  const newArr = [];
  for (let i = 0; i < newN; i++) {
    newArr.push(arr[i].reverse());
  }
  return newArr;
};

/**
 * [3] 배열 오른쪽 90도 회전
 */
const step_three = (arr) => {
  const newN = arr.length;
  const newM = arr[0].length;

  const newArr = [];
  for (let i = 0; i < newM; i++) {
    let line = [];
    for (let j = newN - 1; j >= 0; j--) {
      line.push(arr[j][i]);
    }
    newArr.push(line);
  }
  return newArr;
};

/**
 * [4] 배열 왼쪽 90도 회전
 */
const step_four = (arr) => {
  const newN = arr.length;
  const newM = arr[0].length;

  const newArr = [];
  for (let i = newM - 1; i >= 0; i--) {
    const line = [];
    for (let j = 0; j < newN; j++) {
      line.push(arr[j][i]);
    }
    newArr.push(line);
  }
  return newArr;
};

/**
 * [5] 1번 그룹 -> 2번 그룹, ..., 4번 그룹 -> 1번 그룹
 */
const step_five = (arr) => {
  const newN = arr.length;
  const newM = arr[0].length;

  const newArr = Array.from({ length: newN }, () => Array(newM).fill(0));

  const half_X = newN / 2;
  const half_Y = newM / 2;

  // 1->2
  for (let i = 0; i < newN / 2; i++) {
    for (let j = 0; j < newM / 2; j++) {
      newArr[i][j + half_Y] = arr[i][j];
    }
  }

  // 2->3
  for (let i = 0; i < newN / 2; i++) {
    for (let j = newM / 2; j < newM; j++) {
      newArr[i + half_X][j] = arr[i][j];
    }
  }

  // 3->4
  for (let i = newN / 2; i < newN; i++) {
    for (let j = newM / 2; j < newM; j++) {
      newArr[i][j - half_Y] = arr[i][j];
    }
  }

  // 4->1
  for (let i = newN / 2; i < newN; i++) {
    for (let j = 0; j < newM / 2; j++) {
      newArr[i - half_X][j] = arr[i][j];
    }
  }

  return newArr;
};

/**
 * [5] 1번 그룹 -> 4번 그룹, ..., 4번 그룹 -> 3번 그룹
 */
const step_six = (arr) => {
  const newN = arr.length;
  const newM = arr[0].length;

  const newArr = Array.from({ length: newN }, () => Array(newM).fill(0));

  const half_X = newN / 2;
  const half_Y = newM / 2;

  // 1->4
  for (let i = 0; i < newN / 2; i++) {
    for (let j = 0; j < newM / 2; j++) {
      newArr[i + half_X][j] = arr[i][j];
    }
  }

  // 2->1
  for (let i = 0; i < newN / 2; i++) {
    for (let j = newM / 2; j < newM; j++) {
      newArr[i][j - half_Y] = arr[i][j];
    }
  }

  // 3->2
  for (let i = newN / 2; i < newN; i++) {
    for (let j = newM / 2; j < newM; j++) {
      newArr[i - half_X][j] = arr[i][j];
    }
  }

  // 4->3
  for (let i = newN / 2; i < newN; i++) {
    for (let j = 0; j < newM / 2; j++) {
      newArr[i][j + half_Y] = arr[i][j];
    }
  }

  return newArr;
};

let resultArr = array;

for (let i = 0; i < R; i++) {
  const step = round[i];

  switch (step) {
    case 1:
      const result1 = step_one(resultArr);
      resultArr = result1;
      break;
    case 2:
      const result2 = step_two(resultArr);
      resultArr = result2;
      break;
    case 3:
      const result3 = step_three(resultArr);
      resultArr = result3;
      break;
    case 4:
      const result4 = step_four(resultArr);
      resultArr = result4;
      break;
    case 5:
      const result5 = step_five(resultArr);
      resultArr = result5;
      break;
    case 6:
      const result6 = step_six(resultArr);
      resultArr = result6;
      break;
  }
}

resultArr.map((el) => console.log(el.join(' ')));
