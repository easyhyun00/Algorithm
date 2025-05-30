function solution(n, k, cmd) {
  const table = Array.from({length: n}, (_, i) => [i-1, i+1]); // 이전, 다음
  const stack = []; // 삭제된 곳 저장

  const result = Array(n).fill('O');  // 결과

  let current = k; // 현재

  for (const command of cmd) {
    const [cmd, num] = command.split(' ');
    
    if (cmd === 'U') { // [위]
      for (let i = 0; i < num; i++) {
        current = table[current][0]; // 한 칸씩 이동하기
      }
    } else if (cmd === 'D') { // [아래]
      for (let i = 0; i < num; i++) {
        current = table[current][1]; // 한 칸씩 이동하기
      }
    } else if (cmd === 'C') { // [삭제]
      stack.push(current);
      result[current] = 'X';
      
      const [up, down] = table[current];
      
      // 이전과 다음 노드 연결
      if (up !== -1) table[up][1] = down;
      if (down !== n) table[down][0] = up;
      
      current = down === n ? up : down; // 현재 위치 업데이트
    } else if (cmd === 'Z') { // [복구]
      const restore = stack.pop();
      result[restore] = 'O';
      
      const [up, down] = table[restore];
      
      // 이전과 다음 인덱스 복구
      if (up !== -1) table[up][1] = restore;
      if (down !== n) table[down][0] = restore;
    }
  }

  return result.join('');
}