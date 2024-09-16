const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

for (let i = 0; i < input.length - 1; i++) {
  const K = input[i][0];
  const arr = input[i].slice(1, K + 1);

  function dfs(list, last) {
    if (list.length === 6) {
      console.log(list.join(' '));
      return;
    }

    for (let i = last; i < arr.length; i++) {
      if (list.includes(arr[i])) continue;

      list.push(arr[i]);
      dfs([...list], i);
      list.pop();
    }
  }
  if (i !== 0) console.log('');
  dfs([], 0);
}
