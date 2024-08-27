function solution(maps) {
    const x = maps.length;
    const y = maps[0].length;
    const direction = [[-1,0],[1,0],[0,-1],[0,1]]; // 상하좌우
    
    const bfs = () => {
        const que = [[0,0,1]] // 행, 열, 이동거리
        maps[0][0] = 0; // 지나감
        
        while(que.length > 0) {
            const [row, col, distance] = que.shift();
            
            // 적 팀의 진영 도착
            if (row === x - 1 && col === y - 1) {
                return distance;
            }
            
            // 상하좌우 이동
            for (let [r, c] of direction) {
                const newRow = row + r;
                const newCol = col + c;
                
                // 맵 안에 있고(0 이상, x y 보다 작음), 벽이 아닐 때(좌표값이 1)
                if (newRow >= 0 && newRow < x && newCol >= 0 && newCol < y && maps[newRow][newCol] === 1) {
                    que.push([newRow,newCol,distance + 1])
                    // 지나감
                    maps[newRow][newCol] = 0;
                }
            }
        }
        return -1;
    }
    return bfs();
}