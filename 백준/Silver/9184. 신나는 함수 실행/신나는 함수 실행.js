const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

// 3차원 배열 메모
const memo = Array.from({ length: 101 }, () =>
  Array.from({ length: 101 }, () => Array(101).fill(0))
);

// 계산
const w = (a, b, c) => {
  // 저장된 값 있으면 그 값 반환
  if (memo[a + 50][b + 50][c + 50]) return memo[a + 50][b + 50][c + 50];

  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }

  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  }

  let result;

  if (a < b && b < c) {
    result = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  }

  result =
    w(a - 1, b, c) +
    w(a - 1, b - 1, c) +
    w(a - 1, b, c - 1) -
    w(a - 1, b - 1, c - 1);

  memo[a + 50][b + 50][c + 50] = result;
  return result;
};

for (let data of input) {
  const [a, b, c] = data;

  if (a === -1 && b === -1 && c === -1) {
    break;
  } else {
    const result = w(a, b, c);
    console.log(`w(${a}, ${b}, ${c}) = ${result}`);
  }
}
