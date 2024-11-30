const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => Number(el));

/**
 * N = 1 => 1
 * N = 2 => 1
 * N = 3 => 1
 * N = 4 => 2 (1+1)
 * N = 5 => 2
 * N = 6 => 3 (1+2)
 * N = 7 => 4 (1+3)
 * N = 8 => 5 (1+4)
 * N = 9 => 7 (2+5 => fun(4) + fun(8))
 * N = 10 => 9 (2+7 => fun(5) + fun(9))
 * N = 11 => 12 (3+9 => fun(6) + fun(10))
 * N = 12 => 16 (4+12 => fun(7) + fun(11))
 * N = 13 => 21 (5+16 => fun(8) + fun(12))
 * N = 14 => 28 (7+21 => fun(9) + fun(13))
 */

const memo = new Array(101).fill(0);
memo[1] = 1;
memo[2] = 1;
memo[3] = 1;
memo[4] = 2;
memo[5] = 2;
memo[6] = 3;
memo[7] = 4;
memo[8] = 5;

for (let i = 1; i <= input[0]; i++) {
  for (let j = 9; j <= input[i]; j++) {
    memo[j] = memo[j - 5] + memo[j - 1];
  }
  console.log(memo[input[i]]);
}
