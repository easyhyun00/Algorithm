const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const visited = Array.from({ length: 1001 }, () => new Array(1001).fill(false));

// 문자열 길이, 시간, 클립보드 길이
const BFS = () => {
  const queue = [[1, 0, 0]];
  visited[1][0] = true;

  while (queue.length) {
    const [current, time, clipboard] = queue.shift();

    if (current === input) return time;

    // 클립보드 복사
    if (!visited[current][current]) {
      queue.push([current, time + 1, current]);
      visited[current][current] = true;
    }

    // 클립보드 붙여 넣기
    if (
      current + clipboard <= 1000 &&
      !visited[current + clipboard][clipboard] &&
      clipboard > 0
    ) {
      queue.push([current + clipboard, time + 1, clipboard]);
      visited[current + clipboard][clipboard] = true;
    }

    // 삭제하기
    if (!visited[current - 1][clipboard] && current - 1 > 0) {
      queue.push([current - 1, time + 1, clipboard]);
      visited[current - 1][clipboard] = true;
    }

    // // 모두 복사 -> 붙여넣기, 붙여넣기, 삭제
    // const nextString = [current * 2, current + clipboard, current - 1];

    // nextString.map((item, index) => {
    //   if (item >= 2 && item <= 1000) {
    //     switch (index) {
    //       case 0:
    //         queue.push([item, time + 2, current]);
    //         // visited[item][clipboard] = true;
    //         break;
    //       case 1:
    //         queue.push([item, time + 1, clipboard]);
    //         // visited[item][clipboard] = true;
    //         break;
    //       case 2:
    //         queue.push([item, time + 1, clipboard]);
    //         // visited[item][clipboard] = true;
    //         break;
    //     }
    //   }
    // });
  }
};

console.log(BFS());
