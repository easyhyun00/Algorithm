const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

let data = Array.from(Array(1001), () => BigInt(0));
data[0] = BigInt(1);
data[1] = BigInt(1);
data[2] = BigInt(3);
data[3] = BigInt(5);

function solution(num) {
  if (data[num]) {
    return data[num];
  }
  return (data[num] = solution(num - 1) + solution(num - 2) * BigInt(2));
}

console.log((solution(input) % BigInt(10007)).toString());
