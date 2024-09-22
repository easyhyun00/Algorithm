const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

for (let i = 0; i < input.length - 1; i++) {
  const K = input[i][0];
  const NumberList = input[i].slice(1, 1 + K);

  function DFS(arr, index) {
    if (arr.length === 6) {
      console.log(arr.join(' '));
      return;
    }

    for (let i = index; i < K; i++) {
      if (arr.includes(NumberList[i])) continue;

      DFS([...arr, NumberList[i]], i + 1);
    }
  }
  if (i !== 0) console.log('');
  DFS([], 0);
}
