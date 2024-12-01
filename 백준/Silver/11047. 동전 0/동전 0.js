const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, K] = input.shift();

let money = K;
let result = 0;

for (let i = N - 1; i >= 0; i--) {
  if (money === 0) break;
  const cnt = Math.floor(money / input[i]);
  money -= input[i] * cnt;
  result += cnt;
}

console.log(result);
