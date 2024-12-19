const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N] = input[0];
const array = input.slice(1);

let result = 0;

const getProfit = (day, sum) => {
  if (day <= N) {
    result = Math.max(result, sum);
  }

  for (let i = day; i < array.length; i++) {
    if (i + array[i][0] <= N) {
      getProfit(i + array[i][0], sum + array[i][1]);
    }
  }
};

getProfit(0, 0);
console.log(result);
