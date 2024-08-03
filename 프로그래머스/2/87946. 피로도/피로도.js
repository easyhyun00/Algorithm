function solution(k, dungeons) {
    let answer = [];
    let visited = new Array(dungeons.length).fill(false);

    const dfs = (k, count) => {
        
        answer.push(count);

        for(let i=0; i<dungeons.length; i++) {
            if(k >= dungeons[i][0] && !visited[i]) {
                visited[i] = true;
                dfs(k-dungeons[i][1], count + 1);
                visited[i] = false; 
            }
        }
    }

    dfs(k, 0);
    
    return Math.max(...answer);
}