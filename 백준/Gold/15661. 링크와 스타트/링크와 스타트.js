const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const list = input.slice(1);

let result = Infinity;

/**
 * [2] 능력치 차이 구하기
 * => 브루트 포스
 */
const getPower = (map) => {
  const teamA = [];
  const teamB = [];

  for (let i = 0; i < N; i++) {
    if (map[i]) teamA.push(i);
    else teamB.push(i);
  }

  let powerA = 0;
  let powerB = 0;

  for (let i = 0; i < teamA.length - 1; i++) {
    for (let j = i + 1; j < teamA.length; j++) {
      powerA += list[teamA[i]][teamA[j]];
      powerA += list[teamA[j]][teamA[i]];
    }
  }

  for (let i = 0; i < teamB.length - 1; i++) {
    for (let j = i + 1; j < teamB.length; j++) {
      powerB += list[teamB[i]][teamB[j]];
      powerB += list[teamB[j]][teamB[i]];
    }
  }

  result = Math.min(result, Math.abs(powerA - powerB));
};

/**
 * [1] 팀원 구하기
 * => 백트래킹
 */
const map = new Array(N).fill(false);

const backTracking = (index, map) => {
  const len = map.filter((item) => item).length;

  if (len >= 1 && len < N) {
    getPower(map);
  }

  for (let i = index; i < N; i++) {
    if (!map[i]) {
      map[i] = true;
      backTracking(i + 1, map);
      map[i] = false;
    }
  }
};

backTracking(0, map); // index,map

console.log(result);
