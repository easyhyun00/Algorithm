const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

/**
 * 종류: 00, 1
 * N = 1 => 1개: 1
 * N = 2 => 2개: 00, 11
 * N = 3 => 3개: 001, 111, 100 => fun(2) + fun(1)
 * N = 4 => 5개: 0000, 0011, 1100, 1111, 1001 => fun(3) + fun(2)
 * N = 5 => 8개: fun(4) + fun(3);
 * N = 6 => 13개: fun(5) + fun(4);
 */

const memo = new Array(input + 1).fill(0);
memo[1] = 1;
memo[2] = 2;
memo[3] = 3;
memo[4] = 5;

for (let i = 5; i <= input; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
}

console.log(memo[input]);
