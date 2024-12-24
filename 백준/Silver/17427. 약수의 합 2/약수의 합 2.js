const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const arr = new Array(input + 1).fill(0);

for (let i = 1; i <= input; i++) {
  for (let j = i; j <= input; j += i) {
    arr[j] += i; // i를 약수로 갖는 j에다가 더함
  }
}

let result = 0;

for (let i = 1; i <= input; i++) {
  result += arr[i];
}

console.log(result);
