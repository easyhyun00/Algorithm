const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

const groups = input.split('-'); // '-' 기준으로 나누기

// 첫 번째 그룹(처음 나오는 숫자들)의 합 계산
const initial = groups[0]
  .split('+')
  .reduce((sum, num) => sum + Number(num), 0);

// 이후 그룹들은 '+' 기준으로 계산하여 모두 빼줌
const result = groups.slice(1).reduce((acc, group) => {
  const sum = group
    .split('+')
    .reduce((sum, num) => sum + Number(num), 0);
  return acc - sum;
}, initial);

console.log(result);
