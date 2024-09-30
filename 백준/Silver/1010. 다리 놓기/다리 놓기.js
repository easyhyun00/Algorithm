const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const T = input[0][0];

let data = Array.from(Array(31), () => BigInt(0));
data[0] = BigInt(1);
data[1] = BigInt(1);

const result = [];

function factory(num) {
  if (data[num]) {
    return data[num];
  }
  return (data[num] = factory(num - 1) * BigInt(num));
}

for (let i = 1; i <= T; i++) {
  const [N, M] = input[i];

  const n = factory(N);
  const m = factory(M);
  const nm = factory(M - N);

  result.push((m / (n * nm)).toString());
}

console.log(result.join('\n'));