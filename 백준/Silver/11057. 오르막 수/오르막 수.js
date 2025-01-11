const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

// map[N][K] : 길이가 N이고, K로 끝나는 오르막 수의 개수
const map = Array.from({ length: input + 1 }, () => Array(10).fill(BigInt(0)));
for (let i = 0; i < 10; i++) {
  map[1][i] = BigInt(1); // 길이가 1이고, i로 끝나는 오르막 수의 개수
}

for (let i = 2; i <= input; i++) {
  for (let j = 0; j < 10; j++) {
    let sum = BigInt(0);
    for (let z = 0; z <= j; z++) {
      sum += map[i - 1][z];
    }
    map[i][j] = sum % BigInt(10007);
  }
}

console.log((map[input].reduce((a, c) => a + c) % BigInt(10007)).toString());
