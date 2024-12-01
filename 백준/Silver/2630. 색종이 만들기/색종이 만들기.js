const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N] = input.shift();

let white = 0;
let blue = 0;

const countPapers = (x, y, size, arr) => {
  const color = arr[x][y];

  // 첫 번째 색상(color)와 다르면 4등분
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      // 첫 번째와 색상이 다르면
      if (arr[i][j] !== color) {
        const newSize = size / 2;
        // 4등분으로 분할
        countPapers(x, y, newSize, arr);
        countPapers(x + newSize, y, newSize, arr);
        countPapers(x, y + newSize, newSize, arr);
        countPapers(x + newSize, y + newSize, newSize, arr);
        return;
      }
    }
  }

  // 여기까지 왔으면 같은 색상
  if (color === 0) {
    white += 1;
  } else {
    blue += 1;
  }
};

countPapers(0, 0, N, input);
console.log(white);
console.log(blue);
