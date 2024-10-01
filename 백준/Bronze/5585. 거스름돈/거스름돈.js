const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

let change = 1000 - input;
let count = 0;

while (change > 0) {
  if (change >= 500) {
    change -= 500;
    count++;
    continue;
  }
  if (change >= 100) {
    change -= 100;
    count++;
    continue;
  }
  if (change >= 50) {
    change -= 50;
    count++;
    continue;
  }
  if (change >= 10) {
    change -= 10;
    count++;
    continue;
  }
  if (change >= 5) {
    change -= 5;
    count++;
    continue;
  }
  if (change >= 1) {
    change -= 1;
    count++;
    continue;
  }
}

console.log(count);
