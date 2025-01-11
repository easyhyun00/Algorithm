const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

/**
 * map[0][0] => 0번째 줄 다 비었을 때,
 * map[0][1] => 0번째 줄 왼쪽만 있을 때,
 * map[0][2] => 0번째 줄 오른쪽만 있을 때,
 */
const map = Array.from({ length: input }, () => Array(3).fill(BigInt(0)));
map[0][0] = BigInt(1);
map[0][1] = BigInt(1);
map[0][2] = BigInt(1);

for (let i = 1; i < input; i++) {
  // 비었을 때
  map[i][0] = (map[i - 1][0] + map[i - 1][1] + map[i - 1][2]) % BigInt(9901);
  // 왼쪽에 있을 때
  map[i][1] = (map[i - 1][0] + map[i - 1][2]) % BigInt(9901);
  // 오른쪽에 있을 때
  map[i][2] = (map[i - 1][0] + map[i - 1][1]) % BigInt(9901);
}

console.log(
  (map[input - 1].reduce((acc, cur) => acc + cur) % BigInt(9901)).toString()
);
