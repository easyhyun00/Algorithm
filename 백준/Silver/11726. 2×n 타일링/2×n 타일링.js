const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const arr = Array.from(Array(1001), () => BigInt(0));
arr[1] = BigInt(1);
arr[2] = BigInt(2);
arr[3] = BigInt(3);

function solution(n) {
  if (arr[n]) {
    return arr[n];
  }
  return (arr[n] = solution(n - 1) + solution(n - 2));
}

console.log((solution(input) % BigInt(10007)).toString());
