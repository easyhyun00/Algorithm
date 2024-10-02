const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let arr = Array.from(Array(input + 1).fill(Infinity));
arr[0] = 0;

for (let i = 3; i <= input; i++) {
  if (i >= 3) {
    arr[i] = Math.min(arr[i], arr[i - 3] + 1);
  }

  if (i >= 5) {
    arr[i] = Math.min(arr[i], arr[i - 5] + 1);
  }
}

console.log(arr[input] === Infinity ? -1 : arr[input]);
