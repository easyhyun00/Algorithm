function solution(n, edge) {
    // 그래프 초기화
    const graph = Array.from(Array(n + 1), () => []);

    // 그래프 내용 채우기
    // 각 노드에 연결된 노드 그래프 생성
    edge.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    
    // 방문 여부 초기화
    const visited = Array(n + 1).fill(0);
      
    // 1번 노드부터 시작
    const queue = [1];
    visited[1] = 1;
    
    while (queue.length) {
        const current = queue.shift();
        
        graph[current].forEach((next) => {
          
            // 방문하지 않았을 때
            if (!visited[next]) {
                // 거리 증가
                visited[next] = visited[current] + 1;            
                // 다음 탐색 대상
                queue.push(next);
            }
        })
    }
    const max = Math.max(...visited);
    
    return visited.filter((v) => v === max).length;
}