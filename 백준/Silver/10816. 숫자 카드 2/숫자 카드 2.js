const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const arrN = input[1].sort((a, b) => a - b);

const M = input[2][0];
const arrM = input[3];

/**
 * [해시맵]
 */
const hashMap = new Map();
arrN.forEach((item) => {
  hashMap.set(item, hashMap.get(item) + 1 || 1);
});

const result = arrM.map((item) => hashMap.get(item) || 0);
console.log(result.join(' '));
