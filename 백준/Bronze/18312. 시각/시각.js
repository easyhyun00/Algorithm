const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

solution(input);

function solution(input) {
  const N = parseInt(input[0]);
  const K = input[1];
  let count = 0;

  for (let hour = 0; hour <= N; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      for (let second = 0; second < 60; second++) {
        const time = `${String(hour).padStart(2, '0')}${String(minute).padStart(
          2,
          '0'
        )}${String(second).padStart(2, '0')}`;
        if (time.includes(K)) {
          count++;
        }
      }
    }
  }

  console.log(count);
}
