const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const arr = Array.from(Array(input + 1), () => Array(10).fill(0));

const num = 1000000000;

arr[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
arr[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

for (let i = 3; i <= input; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      arr[i][j] = arr[i - 1][j + 1] % num;
    } else if (j >= 1 && j <= 8) {
      arr[i][j] = (arr[i - 1][j - 1] + arr[i - 1][j + 1]) % num;
    } else {
      arr[i][j] = arr[i - 1][j - 1] % num;
    }
  }
}

const result = arr[input].reduce((acc, cur) => acc + cur, 0);
console.log(result % num);
